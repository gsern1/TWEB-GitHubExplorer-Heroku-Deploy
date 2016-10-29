(function() {
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
	*/

  	angular
		.module('gefeature1')
		.controller('Gefeature1Ctrl', Gefeature1);

		Gefeature1.$inject = ['$scope', '$http'];

		/*
		* @summary instantiates the Gefeature1 module
		* Fetches the list of the most starred repos on github by executing 
		* an http get query on the url /most_starred_repos
		*/
		function Gefeature1($scope, $http) {
			/*jshint validthis: true */
			var vm = this;
			$scope.getMostStarredRepos = function() {
				$http.get("/most_starred_repos")
					.success(function (data) {
						console.log(data);
						$scope.most_starred_repos = data;
						$scope.reposFound = data.length;
					});
			};
		}

})();
