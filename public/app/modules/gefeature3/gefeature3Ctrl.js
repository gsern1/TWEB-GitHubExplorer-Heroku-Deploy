(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:gefeature3Ctrl
	* @description
	* # gefeature3Ctrl
	* Controller of the app
	*/

  	angular
		.module('gefeature3')
		.controller('Gefeature3Ctrl', Gefeature3);

		Gefeature3.$inject = ['$scope', '$http'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Gefeature3($scope, $http) {
			/*jshint validthis: true */
			var vm = this;

			$scope.username = 'angular';
			
			$http.get("https://api.github.com/users/" + $scope.username + "/repos")
			.success(function (data) {
				$scope.repos = data;
				$scope.reposFound = data.length;
			});

			$scope.getUserData = function() {
				$http.get("https://api.github.com/users/" + $scope.username + "/repos")
			       .success(function (data) {
				     $scope.repos = data;
				     $scope.reposFound = data.length;
			    });
			};
		}

})();
