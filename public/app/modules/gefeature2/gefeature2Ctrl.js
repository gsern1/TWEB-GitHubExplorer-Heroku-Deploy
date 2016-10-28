(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:gefeature2Ctrl
	* @description
	* # gefeature2Ctrl
	* Controller of the app
	*/

  	angular
		.module('gefeature2')
		.controller('Gefeature2Ctrl', Gefeature2);

		Gefeature2.$inject = ['$scope', '$http', '$q'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Gefeature2($scope, $http, $q) {
			/*jshint validthis: true */
			var vm = this;

			$http.get("/history")
				.success(function (data) {
					$scope.history = data;
					$scope.requestFound = data.length;
				});

			$scope.username = 'galedric';
			$scope.repoName = 'HEIG-GEN';

			$scope.getRepoData = function() {
				$http.get("https://api.github.com/repos/" + $scope.username + "/" + $scope.repoName + "/branches", {
					headers: {'Authorization': 'token 1ee24c1562555ac1694480b39762c7764c7c6be4'}
				})
				.then(
					function success(response) {
						var data = response.data;
						var promises = [];
						console.log(data);
						for(var branch in data){
							promises.push($http.get("https://api.github.com/repos/" + $scope.username + "/" + $scope.repoName + "/commits", {
								headers: {'Authorization': 'token 1ee24c1562555ac1694480b39762c7764c7c6be4'},
								params:{"sha":  data[branch].commit.sha}
							}));
						}
						return $q.all(promises);
					}
				)
				.then(
					function success(response) {
						console.log(response);
						var authorsList = [];
						for(var res in response){
							var data = response[res].data;
							console.log(data);
							for(var commit in data) {
								authorsList[data[commit].commit.author.name] = authorsList[data[commit].commit.author.name] ? authorsList[data[commit].commit.author.name] + 1 : 1; 
							}
						}

						var authors = [],
							numberOfCommits = [];

						for (var property in authorsList) {
							if ( ! authorsList.hasOwnProperty(property)) {
								continue;
							}

							authors.push(property);
							numberOfCommits.push(authorsList[property]);
						}
						console.log(JSON.stringify(authors));
						console.log(JSON.stringify(numberOfCommits));
						$scope.authors = authors;
						$scope.numberOfCommits = numberOfCommits;

						$scope.history.push({date: new Date(), user: $scope.username, repo: $scope.repoName});
						$scope.requestFound = 1;

						return $http.post('/add_feature2_request', {repo : $scope.username, user : $scope.repoName});
					}
				);
			}
		}

})();
