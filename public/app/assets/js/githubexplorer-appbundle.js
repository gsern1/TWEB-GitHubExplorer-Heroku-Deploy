/*!
* githubexplorer - v0.0.1 - MIT LICENSE 2016-10-03. 
* @author Guillaume Serneels
*/
(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('githubexplorer', [
		'ngResource',
		'ngAria',
		 'ui.bootstrap',
		
		'ngCookies',
		'ngAnimate',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
		'gefeature1',
		'gefeature2',
		'gefeature3',
	]);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('githubexplorer')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		
		$urlRouterProvider
			.otherwise('/gefeature1');
		
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';

		console.log('AngularJS run() function...');
	}


})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:gefeature1Module
	 * @description
	 * # gefeature1Module
	 * Module of the app
	 */

  	angular.module('gefeature1', []);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:gefeature2Module
	 * @description
	 * # gefeature2Module
	 * Module of the app
	 */

  	angular.module('gefeature2', ['chart.js']);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:gefeature3Module
	 * @description
	 * # gefeature3Module
	 * Module of the app
	 */

  	angular.module('gefeature3', []);

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

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

'use strict';

/**
 * @ngdoc function
 * @name app.route:gefeature2Route
 * @description
 * # gefeature2Route
 * Route of the app
 */

angular.module('gefeature2')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('gefeature2', {
				url:'/gefeature2',
				templateUrl: 'app/modules/gefeature2/gefeature2.html',
				controller: 'Gefeature2Ctrl',
				controllerAs: 'vm'
			});
		
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:gefeature3Route
 * @description
 * # gefeature3Route
 * Route of the app
 */

angular.module('gefeature3')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('gefeature3', {
				url:'/gefeature3',
				templateUrl: 'app/modules/gefeature3/gefeature3.html',
				controller: 'Gefeature3Ctrl',
				controllerAs: 'vm'
			});
		
	}]);

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('githubexplorer')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '/',
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			});
			
	}]);

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

		Gefeature1.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Gefeature1() {
			/*jshint validthis: true */
			var vm = this;

		}

})();

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

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:gefeature3Ctrl
	* @description
	* # gefeature3Ctrl
	* Controller of the app
	*/

  	angular
		.module('gefeature3')
		.controller('Gefeature3Ctrl', Gefeature3);

		Gefeature3.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Gefeature3() {
			/*jshint validthis: true */
			var vm = this;

		}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('githubexplorer')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, githubexplorer!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:NavBarCtrl
	* @description
	* # NavBarCtrl
	* Controller of the app
	*/

	angular
		.module('githubexplorer')
		.controller('NavBarCtrl', NavBar);

	NavBar.$inject = ['homeService', 'MenuService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function NavBar(homeService, MenuService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "githubexplorer";

		vm.menu = MenuService.listMenu();

	}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:gefeature1Service
	 * @description
	 * # gefeature1Service
	 * Service of the app
	 */

  	angular
		.module('gefeature1')
		.factory('Gefeature1Service', Gefeature1);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Gefeature1.$inject = ['$http'];

		function Gefeature1 ($http) {

		}

})();

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

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:gefeature3Service
	 * @description
	 * # gefeature3Service
	 * Service of the app
	 */

  	angular
		.module('gefeature3')
		.factory('Gefeature3Service', Gefeature3);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Gefeature3.$inject = ['$http'];

		function Gefeature3 ($http) {

		}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('githubexplorer')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('githubexplorer')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'gefeature1',
							name: 'Gefeature1'
					},
			    
					{
						link: 'gefeature2',
							name: 'Gefeature2'
					},
			    
					{
						link: 'gefeature3',
							name: 'Gefeature3'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.directive:navbarDirective
	* @description
	* # navbarDirective
	* Directive of the app
	*/

	angular
		.module('githubexplorer')
		.directive('navBar', navBar);

	function navBar() {

		var directive = {
			link: link,
			restrict: 'EA',
			scope: {
				menus: '=',
				brand: '='
			},
			controller: control,
			templateUrl: 'app/modules/layouts/nav-bar/navbar-tpl.html'

		};

		return directive;

		function link(scope, element, attrs, $location) {
			// write your code here
			scope.defaults = {
				brand: '',
				menus: [],
				search: {
					show: false
				}
			}; // end defaults

		}

		function control($scope, $location) {

			$scope.isActive = function (path) {
				var currentPath = $location.path().split('/')[1];
				if (currentPath.indexOf('?') !== -1) {
					currentPath = currentPath.split('?')[0];
				}
				return currentPath === path.split('/')[1];
			};
		}

	}

})();
