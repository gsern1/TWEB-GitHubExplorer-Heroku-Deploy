# TWEB Labo 1 : Mining Data in Github

This repository contains the result of the fist lab session for Antoine Drabble and Guillaume Serneels in the TWEB Course 2016-20117 at HEIG-VD. 

The project is aimed at developing and deploy a web application allowing users to explore usage statistics of github.com. The users are first welcomed by a landing page before accessing the web app.

## Project structure

### branch gh-pages : Landing Page

The landing page is made available using GitHub Pages an can be accessed at the following URL:

https://gsern1.github.io/TWEB-GitHubExplorer-Heroku-Deploy/


### branch master : Github explorer web application

To develop this project we have first created an AngularJS application using the angm generator. The application's navigation relies on the UI-Router framework and the charts display is made possible by the angular-chart.js (based on Chart.js) module. The aplication's database has been created with MongoDB.

This AngularJS application was then incorporated inside a simple Node.js app using Expess 4, and deployed to heroku, along with the mLab MongoDB module.

Here's the adress of the heroku deployement:

https://tweb-github-explorer.herokuapp.com/


### html template

The html template we're using is Future Imperfect from html5up.

https://html5up.net/future-imperfect

## GitHub Explorer features

### Feature 1 : most starred repos

List the repositories which recieved stars from the most users on GitHub.

### Feature 2 : repository commiters

See every user who commited to the repository of your choice and the percentages of their contribution

### Feature 3 : user's repositories

List all the repositories of the user of your choice