(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:gefeature3Test
	 * @description
	 * # gefeature3Test
	 * Test of the app
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
