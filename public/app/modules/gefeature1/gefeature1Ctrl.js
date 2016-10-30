(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:gefeature1Ctrl
	* @description
	* # gefeature1Ctrl
	* Controller of the github explorer app feature 1,  displays a 
	* list of the most starred repos on github	
	* @author Antoine Drabble
	* @author Guillaume Serneels
	*
	*/

	angular
		.module('gefeature1')
		.controller('Gefeature1Ctrl', Gefeature1);

	Gefeature1.$inject = ['$scope', '$http'];

	/*
	* @summary instantiates the Gefeature1 module
	* Fetches the list of the most starred repos from the database using 
	* the REST API url /most_starred_repos
	*/
	function Gefeature1($scope, $http) {
		// Returns the list of most starred repos
		$scope.getMostStarredRepos = function () {
			$http.get("/most_starred_repos")
				.success(function (data) {
					$scope.most_starred_repos = data;
					$scope.reposFound = data.length;
				});
		}; 

		// Used by Angular to sort the most starred repos by the number of stars
		$scope.sortByMostStarredRepos = function(repo){
			return parseInt(repo.stargazers_count);
		};
	}

})();
