/**
 * Entry point of the github explorer web app, it uses Express 4 to render the Angular 1 app and
 * it provides the REST api needed for the features.
 *
 * @summary   Entry point of the github explorer web app
 *
 * @link https://tweb-github-explorer.herokuapp.com/
 * @author Antoine Drabble
 * @author Guillaume Serneels
 * 
 */
var express = require('express');
var app = express();
var request = require('request-promise');
var MongoClient = require('mongodb').MongoClient;

// This MongoDB database is provided by the mLab module on heroku
var db_url = "mongodb://admin:adminghe@ds057066.mlab.com:57066/heroku_70302nzl";
var token = '1ee24c1562555ac1694480b39762c7764c7c6be4';

/**
 * This function relies on the request-promise syntax to fetch the list of 
 * most starred repos and save it in the mongoDB database
 */
function fetchAndSaveMostStarredRepos() {
  var context = {};
  context.db_url = db_url;
  context.apiOptions = {
    uri: "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars",
    json: true,
    method: 'GET',
    headers: {
      'user-agent': 'node.js',
      'Authorization': 'token ' + token
    }
  }
  /**
   * The context object is passed through each request-promise allowing the most 
   * starred repository data to be transmitted between each step
   * */
  return openDatabaseConnection(context)
    .then(fetchMostStarredRepos)
    .then(saveMostStarredRepos)
    .then(closeDatabaseConnection);
}
/**
 * Connect to the MongoDB database
 */
function openDatabaseConnection(context) {
  console.log("open DB connection...");
  return MongoClient.connect(context.db_url)
    .then(function (db) {
      console.log("DB connection opened");
      context.db = db;
      return context;
    })
}
/**
 * Fetch the list of most starred repos from the Github api 
 */
function fetchMostStarredRepos(context) {
  console.log("fetching most starred repositories from REST api...");
  return request(context.apiOptions)
    .then(function (repos) {
      console.log("Most starred repositories fetched.");
      context.repos = repos;
      return context;
    })
}
/**
 * Save the most starred repos in the database in the form of a new collection named "repos"
 */
function saveMostStarredRepos(context) {
  console.log("Saving most starred repositories...");
  var collection = context.db.collection("repos");
  collection.remove({});
  return collection.insertMany(context.repos.items)
    .then(function (results) {
      console.log("Most starred repositories saved");
      return context;
    })
}
/**
 * Close the connection to the MongoDB database
 */
function closeDatabaseConnection(context) {
  console.log("closing db connection...");
  return context.db.close()
    .then(function () {
      console.log("DB connection closed");
      return context;
    })
}

/**
 * Fetch the list of most starred repos and save it in the mongoDB database
 */
fetchAndSaveMostStarredRepos()
  .then(function (result) {
    console.log("We are done");
  })
  .catch(function (error) {
    console.log("There was an error");
    console.log(error);
  });

// Use bodyParser to parse POST parameters in HTTP requests
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.json());       // to support JSON-encoded bodies

app.set('port', (process.env.PORT || 5000));

//App files located in /public
app.use(express.static(__dirname + '/public'));

// views is the directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// The root url of the website serves the Angular app
app.get('/', function (request, response) {
  response.render('pages/index');
});

// Return the list of the most starred repos from the database in JSON format
app.get('/most_starred_repos', function (request, response) {
  MongoClient.connect(db_url)
    .then(function (db) {
      db.collection('repos', function (err, collection) {
        collection.find({}, { name: 1, html_url: 1, stargazers_count: 1, forks: 1 }).toArray(function (err, items) {
          response.json(items);
        });
      });
    })
    .catch(function (error) {
      console.log("Error connecting to the database");
      console.log(error);
    });
});

// Returns the history of requests from the feature2 in JSON format
app.get('/history', function (request, response) {
  MongoClient.connect(db_url)
    .then(function (db) {
      db.collection('history', function (err, collection) {
        collection.find({}, { date: 1, user: 1, repo: 1 }).toArray(function (err, items) {
          response.json(items);
        });
      });
    })
    .catch(function (error) {
      console.log("Error connecting to the database");
      console.log(error);
    });
});

// Add an element to the history of requests from the feature2
app.post('/add_feature2_request', function (request, response) {
  console.log(request.body.repo);
  MongoClient.connect(db_url)
    .then(function (db) {
      db.collection('history', function (err, collection) {
        collection.insert({ repo: request.body.repo, user: request.body.user, date: new Date() }).then(function (results) {
          console.log("Inserted request");
          return context;
        })
      });
    })
    .catch(function (error) {
      console.log("Error connecting to the database");
      console.log(error);
    });
});

// Start the Express app
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
