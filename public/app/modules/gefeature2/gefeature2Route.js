'use strict';

/**
 * @ngdoc function
 * @name app.route:gefeature2Route
 * @description
 * # gefeature2Route
 * Route of the github explorer app feature 2
 * @author Antoine Drabble
 * @author Guillaume Serneels
 */

angular.module('gefeature2')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('gefeature2', {
				url: '/gefeature2',
				templateUrl: 'app/modules/gefeature2/gefeature2.html',
				controller: 'Gefeature2Ctrl',
				controllerAs: 'vm'
			});

	}]);
