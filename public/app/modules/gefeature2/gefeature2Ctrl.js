(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:gefeature2Ctrl
	* @description
	* # gefeature2Ctrl
	* Controller of the github explorer app feature 2, displays a chart of the number of commits
	* of every user who commited to the specified repository
	* @author Antoine Drabble
	* @author Guillaume Serneels
	*
	*/

	angular
		.module('gefeature2')
		.controller('Gefeature2Ctrl', Gefeature2);

	Gefeature2.$inject = ['$scope', '$http', '$q'];

	/*
	* @summary instantiates the Gefeature2 module
	* Queries the github api to fetch and display every commiter of the specified repo
	*/
	function Gefeature2($scope, $http, $q) {
		// Get the history from the server
		$http.get("/history")
			.success(function (data) {
				$scope.history = data;
				$scope.requestFound = data.length;
			});

		// Define if the repository specified by the user exists or if there is an error querying the Github API
		$scope.repoError = 0;

		// Default user/repository that will be shown
		$scope.username = 'gsern1';
		$scope.repoName = 'TWEB-Labo1-GithubExplorer';

		// Returns the list of commiters of the specified user/repository
		$scope.getRepoData = function () {
			if ($scope.repoName != "" && $scope.username != "") {
				// Get the list of branches of the repository
				$http.get("https://api.github.com/repos/" + $scope.username + "/" + $scope.repoName + "/branches", {
					headers: { 'Authorization': 'token 1ee24c1562555ac1694480b39762c7764c7c6be4' }
				})
					.then(
					function success(response) {
						var data = response.data;
						var promises = [];

						// Get every commits from every branch
						for (var branch in data) {
							promises.push($http.get("https://api.github.com/repos/" + $scope.username + "/" + $scope.repoName + "/commits", {
								headers: { 'Authorization': 'token 1ee24c1562555ac1694480b39762c7764c7c6be4' },
								params: { "sha": data[branch].commit.sha }
							}));
						}
						return $q.all(promises);
					}, function error(response) {
						$scope.repoError = 1;

						// Exit the promise chain
						throw new Error('404 repo not found');
					})
					// Get the list of commits of every branches, calculate the commit data for the chart and add the request to the history via the REST API
					.then(
					function success(response) {
						// Calculate the number of commits of every authors
						var authorsList = [];
						for (var res in response) {
							var data = response[res].data;
							for (var commit in data) {
								authorsList[data[commit].commit.author.name] = authorsList[data[commit].commit.author.name] ? authorsList[data[commit].commit.author.name] + 1 : 1;
							}
						}

						// Set the 2 arrays that can be used by the chart library
						var authors = [],
							numberOfCommits = [];
						for (var property in authorsList) {
							if (!authorsList.hasOwnProperty(property)) {
								continue;
							}

							authors.push(property);
							numberOfCommits.push(authorsList[property]);
						}
						$scope.authors = authors;
						$scope.numberOfCommits = numberOfCommits;

						// Add the request to the history
						$scope.history.push({ date: new Date(), user: $scope.username, repo: $scope.repoName });
						$scope.requestFound = 1;
						$scope.repoError = 0;

						/* log the successfull request in the database */
						return $http.post('/add_feature2_request', { repo: $scope.repoName, user: $scope.username });
					});
			}
		}
	}

})();
