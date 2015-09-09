angular.module('ResultsCtrl', [])
	.controller('ResultsController', ['$scope', '$http', function($scope, $http) {

		console.log("Hello World from ResultsController!");	

		//=========== Facebook log in code
		/*
		// This is called with the results from from FB.getLoginStatus().
  		function statusChangeCallback(response) {
    		console.log('statusChangeCallback');
    		console.log(response);
	  	}

		// This function is called when someone finishes with the Login
	  	// Button.  See the onlogin handler attached to it in the sample
	  	// code below.
	  	function checkLoginState() {
	  		console.log('checkLoginState');

	    	FB.getLoginStatus(function(response) {
	      		statusChangeCallback(response);
	    	});
	  	}

	  	// initialize Facebook, getLogin Status
		window.fbAsyncInit = function() {
			FB.init({
				appId      : '890967984321126',
				cookie     : true,  // enable cookies to allow the server to access 
			                        // the session
				xfbml      : true,  // parse social plugins on this page
				version    : 'v2.2' // use version 2.2
			});

			FB.getLoginStatus(function(response) {
	    		statusChangeCallback(response);
	  		});
		};

		// Load the SDK asynchronously	
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=890967984321126";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	*/	

	//=========== Populate the dynamic content


		$scope.search = function(){

		// set squery to the input from the query box (search bar)	
		var squery =  $scope.query;

		// test for a valid zip code (string of length 5)
		if (squery.length == 5){
			$http.get('/results/' + $scope.query, squery).success(function(response){
				console.log('I recieved that result that I requested');
				
				// Populate $scope.results with response
				$scope.results = response;

				// Let the user no if the search provided no results
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

}]);


