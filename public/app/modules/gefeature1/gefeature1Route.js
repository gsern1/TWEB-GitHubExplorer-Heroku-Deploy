'use strict';

/**
 * @ngdoc function
 * @name app.route:gefeature1Route
 * @description
 * # gefeature1Route
 * Route of the app
 */

angular.module('gefeature1')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('gefeature1', {
				url:'/gefeature1',
				templateUrl: 'app/modules/gefeature1/gefeature1.html',
				controller: 'Gefeature1Ctrl',
				controllerAs: 'vm'
			});
		
	}]);
