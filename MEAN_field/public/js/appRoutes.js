angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page

		.when('/', {
			templateUrl: 'views/results.html',
			controller: 'ResultsController'	
		})
		.when('/results/:query', {
			templateUrl: 'views/results.html',
			controller: 'ResultsController'	
		})

		.when('/details', {
			templateUrl: 'views/details.html',
			controller: 'DetailsController'	
		})

		.when("/details/:itemIdx",{
			templateUrl: 'views/details.html',
			controller: 'DetailsController'
		})


	$locationProvider.html5Mode(true);

}]);