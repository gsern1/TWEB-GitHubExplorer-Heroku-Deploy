(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:gefeature3Test
	 * @description
	 * # gefeature3Test
	 * Test of the github explorer app feature 3
	 * 
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 */

	describe('gefeature3 test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('githubexplorer');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('Gefeature3Ctrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
