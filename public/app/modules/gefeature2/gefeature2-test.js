(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:gefeature2Test
	 * @description
	 * # gefeature2Test
	 * Test of the app
	 */

	describe('gefeature2 test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('githubexplorer');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('Gefeature2Ctrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
