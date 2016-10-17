(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:gefeature1Ctrl
	* @description
	* # gefeature1Ctrl
	* Controller of the app
	*/

  	angular
		.module('gefeature1')
		.controller('Gefeature1Ctrl', Gefeature1);

		Gefeature1.$inject = ['$scope', '$http'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
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
