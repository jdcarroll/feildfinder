angular.module('ResultsCtrl', [])
	.controller('ResultsController', ['$scope', '$http', function($scope, $http) {

		console.log("Hello World from ResultsController!");	

		// Need to grab the zip code from the url
		// save the zip code as a var
		// pass the zip code to the database to pull the results list
		// save results to $scope.results

		// to be deleted later
		// testing without database
		$scope.results = [
		  {name: 'Field 1', address: '123 Main Street', city: 'Orlando', state: 'FL', zip: '32804', phone: '(407) 123-4567'},
		];

}]);


