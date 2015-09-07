angular.module('DetailsCtrl', []).controller('DetailsController', function($scope) {

	$scope.tagline = "Details go here!";
	console.log("Hello World from DetailsController!");	


	// Place weather API stuff here

	// Need to grab the field id from the url
	// save the field id as a var
	// pass the field id to the database to pull the results list (length = 1)
	// save results to $scope.results

	// to be deleted later
	// testing without database

		$scope.results = [
		  {name: 'Field 1', address: '123 Main Street', city: 'Orlando', state: 'FL', zip: '32804', phone: '(407) 123-4567'},
		];

});