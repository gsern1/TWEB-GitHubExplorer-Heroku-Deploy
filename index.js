var express = require('express');
var app = express();
var request = require('request-promise');
var MongoClient = require('mongodb').MongoClient;

var db_url = "mongodb://admin:adminghe@ds057066.mlab.com:57066/heroku_70302nzl";
var token = '1ee24c1562555ac1694480b39762c7764c7c6be4';

// Fetch data
fetchAndSaveMostStarredRepos()
  .then(function(result){
      console.log("We are done");
      console.log(result);
  })
  .catch(function(error){
    console.log("There was an error");
    console.log(error);
  });

function fetchAndSaveMostStarredRepos(){
  var context = {};
  context.db_url = db_url;
  context.apiOptions = {
    uri: "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars",
    json: true,
    method: 'GET',
    headers: {
      'user-agent': 'node.js', 
      'Authorization': 'token '+token
    }
  }

  return openDatabaseConnection(context)
    .then(fetchMostStarredRepos)
    .then(saveMostStarredRepos)
    .then(closeDatabaseConnection);
}
function openDatabaseConnection(context){
  console.log("open DB connection...");
  return MongoClient.connect(context.db_url)
    .then(function(db){
      console.log("DB connection opened");
      context.db = db;
      return context;
    })
}
function fetchMostStarredRepos(context){
  console.log("fetching most starred repositories from REST api...");
  return request(context.apiOptions)
    .then(function(repos){
      console.log("Most starred repositories fetched.");
      context.repos = repos;
      return context;
    })
}
function saveMostStarredRepos(context){
  console.log("Saving most starred repositories...");
  var collection = context.db.collection("repos");
  return collection.insertMany(context.repos.items)
    .then(function(results){
      console.log("Most starred repositories saved");
      return context;
    })
}
function closeDatabaseConnection(context){
  console.log("closing db connection...");
  return context.db.close()
  .then(function(){
    console.log("DB connection closed");
    return context;
  })
}


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});

app.get('/most_starred_repos', function(request, response){
  MongoClient.connect(db_url)
    .then(function(db){
      db.collection('repos', function(err, collection) {
             collection.find({}, {name: 1, html_url: 1, stargazers_count: 1, forks: 1}).toArray(function(err, items) {
                 console.log(items);
                 response.json(items);
             });
      });
    })
    .catch(function(error){
      console.log("Error connecting to the database");
      console.log(error);
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
