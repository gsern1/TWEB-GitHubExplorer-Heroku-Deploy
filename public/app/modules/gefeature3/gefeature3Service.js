(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:gefeature3Service
	 * @description
	 * # gefeature3Service
	 * Service of the github explorer app feature 3
     * @author Antoine Drabble
     * @author Guillaume Serneels
	 */

	angular
		.module('gefeature3')
		.factory('Gefeature3Service', Gefeature3);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Gefeature3.$inject = ['$http'];

	function Gefeature3($http) {

	}

})();
