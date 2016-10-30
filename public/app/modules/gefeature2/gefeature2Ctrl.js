(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:gefeature2Ctrl
	* @description
	* # gefeature2Ctrl
	* Controller of the github explorer app feature 2,  displays a 
	* list of every user who to a repository specified by the user
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
		/*jshint validthis: true */
		var vm = this;

		$http.get("/history")
			.success(function (data) {
				$scope.history = data;
				$scope.requestFound = data.length;
			});

		$scope.username = 'gsern1';
		$scope.repoName = 'TWEB-Labo1-GithubExplorer';
		/* using a token to interact with the github api*/
		$scope.getRepoData = function () {
			$http.get("https://api.github.com/repos/" + $scope.username + "/" + $scope.repoName + "/branches", {
				headers: { 'Authorization': 'token 1ee24c1562555ac1694480b39762c7764c7c6be4' }
			})
				.then(
				function success(response) {
					var data = response.data;
					var promises = [];
					console.log(data);
					for (var branch in data) {
						promises.push($http.get("https://api.github.com/repos/" + $scope.username + "/" + $scope.repoName + "/commits", {
							headers: { 'Authorization': 'token 1ee24c1562555ac1694480b39762c7764c7c6be4' },
							params: { "sha": data[branch].commit.sha }
						}));
					}
					return $q.all(promises);
				}
				)
				.then(
				function success(response) {
					console.log(response);
					var authorsList = [];
					for (var res in response) {
						var data = response[res].data;
						console.log(data);
						for (var commit in data) {
							authorsList[data[commit].commit.author.name] = authorsList[data[commit].commit.author.name] ? authorsList[data[commit].commit.author.name] + 1 : 1;
						}
					}

					var authors = [],
						numberOfCommits = [];

					for (var property in authorsList) {
						if (!authorsList.hasOwnProperty(property)) {
							continue;
						}

						authors.push(property);
						numberOfCommits.push(authorsList[property]);
					}
					console.log(JSON.stringify(authors));
					console.log(JSON.stringify(numberOfCommits));
					$scope.authors = authors;
					$scope.numberOfCommits = numberOfCommits;

					$scope.history.push({ date: new Date(), user: $scope.username, repo: $scope.repoName });
					$scope.requestFound = 1;
					/* log the successfull request in the database */
					return $http.post('/add_feature2_request', { repo: $scope.username, user: $scope.repoName });
				});
		}
	}

})();
