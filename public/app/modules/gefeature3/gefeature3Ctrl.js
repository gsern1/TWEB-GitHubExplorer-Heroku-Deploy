(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:gefeature3Ctrl
	* @description
	* # gefeature3Ctrl
	* Controller of the github explorer app feature 3, displays every repository owned by the specified user
	* 
    * @author Antoine Drabble
	* @author Guillaume Serneels
	*/

  	angular
		.module('gefeature3')
		.controller('Gefeature3Ctrl', Gefeature3);

		Gefeature3.$inject = ['$scope', '$http'];

		/*
		* @summary instantiates the Gefeature3 module
		* Queries the github api to fetch and display every repository owned by the specified user by executing a query to the github api.
		* This query is an http get query on the url /repos
		*/
		function Gefeature3($scope, $http) {
			/*jshint validthis: true */
			var vm = this;

			$scope.username = 'angular';
			
			$scope.getUserData = function() {
				$http.get("https://api.github.com/users/" + $scope.username + "/repos", {
					headers: {'Authorization': 'token 1ee24c1562555ac1694480b39762c7764c7c6be4'}
				})
			       .success(function (data) {
				     $scope.repos = data;
				     $scope.reposFound = data.length;
			    });
			};
		}

})();
