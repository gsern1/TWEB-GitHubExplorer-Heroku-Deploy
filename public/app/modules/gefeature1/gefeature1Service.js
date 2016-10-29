(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:gefeature1Service
	 * @description
	 * # gefeature1Service
	 * Service of the github explorer app feature 1
     * @author Antoine Drabble
     * @author Guillaume Serneels
	 */

	angular
		.module('gefeature1')
		.factory('Gefeature1Service', Gefeature1);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Gefeature1.$inject = ['$http'];

	function Gefeature1($http) {

	}

})();
