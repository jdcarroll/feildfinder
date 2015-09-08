angular.module('ResultsCtrl', [])
	.controller('ResultsController', ['$scope', '$http', function($scope, $http) {

		console.log("Hello World from ResultsController!");	

		$scope.search = function(){
		var squery =  $scope.query;
		if (squery.length == 5){
			$http.get('/results/' + $scope.query, squery).success(function(response){
				console.log('I recieved that result that I requested');
				$scope.results = response;
				if (response.length == 0){
					$scope.message = "There are no Paint Ball Fields in our database matching that zipcode";
				} else{
					$scope.message = "";
				}
			});
		}else{
			console.log('Please enter a valid zip code');
		}
		
	}

	
		// Need to grab the zip code from the url
		// save the zip code as a var
		// pass the zip code to the database to pull the results list
		// save results to $scope.results

		// to be deleted later
		// testing without database
		

		// $scope.results = ResultsService.getResults(zip);

}]);


