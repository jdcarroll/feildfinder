angular.module('DetailsCtrl', []).controller('DetailsController', function($scope, $http, $routeParams) {

	
	console.log("Hello World from DetailsController!");	


	// Place weather API stuff here
	var id = $routeParams.itemIdx

	$http.get('/details/' + id).success(function(response){
			
			
			$scope.result = response;
			
			
			$scope.tagline = $scope.result.name + "Details" ;
			var zip = $scope.result.zip;
			

			var service_URL = "http://api.wunderground.com/api/ae9eea20a89e3294/geolookup/conditions/animatedradar/q/" + zip + ".json";

			$http.get(service_URL).success(function(parsed_json) {
		  	
		  	  var location = parsed_json['location']['city'];
		  	  var state = parsed_json['location']['state'];
		  	  var temp_f = parsed_json['current_observation']['temp_f'];

		  	  var content = document.querySelector('#content');
		  	
		  	  content.innerHTML= "Current temperature in " + location + " " + state + " is: " + temp_f + " <img src='http://api.wunderground.com/api/ae9eea20a89e3294/radar/q/KS/"+ zip +".gif?width=280&height=280&newmaps=1'>";
			});
		});
		
	

	



	// Need to grab the field id from the url
	// save the field id as a var
	// pass the field id to the database to pull the results list (length = 1)
	// save results to $scope.results

	// to be deleted later
	// testing without database

});