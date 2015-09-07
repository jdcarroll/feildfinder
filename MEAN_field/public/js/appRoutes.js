angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/results', {
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

		.when("/results/:itemIdx",{
			templateUrl: 'views/results.html',
			controller: 'ResultsController'	
		})	

	$locationProvider.html5Mode(true);

}]);