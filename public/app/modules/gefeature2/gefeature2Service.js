(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:gefeature2Service
	 * @description
	 * # gefeature2Service
	 * Service of the app
	 */

  	angular
		.module('gefeature2')
		.factory('Gefeature2Service', Gefeature2);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Gefeature2.$inject = ['$http'];

		function Gefeature2 ($http) {

		}

})();
