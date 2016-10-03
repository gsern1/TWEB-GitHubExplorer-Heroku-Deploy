(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:gefeature2Ctrl
	* @description
	* # gefeature2Ctrl
	* Controller of the app
	*/

  	angular
		.module('gefeature2')
		.controller('Gefeature2Ctrl', Gefeature2);

		Gefeature2.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Gefeature2() {
			/*jshint validthis: true */
			var vm = this;

			vm.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
			vm.data= [300, 500, 100];

		}

})();
