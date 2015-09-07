angular.module('ResultsCtrl', [])
	.controller('ResultsController', ['$scope', '$http', function($scope, $http) {

		$scope.tagline = "Results go here!";
		console.log("Hello World from ResultsController!");	

		// Need to grab the zip code from the url
		// save the zip code as a var
		// pass the zip code to the database to pull the results list

}]);


