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

		Gefeature2.$inject = ['$scope', '$http'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Gefeature2($scope, $http) {
			/*jshint validthis: true */
			var vm = this;

			$scope.username = 'angular';
			$scope.repoName = 'angular';
			var token = '1ee24c1562555ac1694480b39762c7764c7c6be4';

			$scope.getRepoData = function() {
				$http.get("https://api.github.com/repos/" + $scope.username + "/" + $scope.repoName + "/commits", {
					headers: {'Authorization': 'token '+token}
				})
					.success(function (data) {
						var authorsList = [];
						for(var commit in data) {
							authorsList[data[commit].commit.author.name] = authorsList[data[commit].commit.author.name] ? authorsList[data[commit].commit.author.name] + 1 : 1; 
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
					});
				};
			}

			

})();
