angular.module('DetailsCtrl', []).controller('DetailsController', function($scope, $http, $routeParams) {
	
	console.log("Hello World from DetailsController!");	

	var id = $routeParams.itemIdx

	// add event listener to fb button div
	function test(){
		console.log('i was clicked');
	}


	//=========== Facebook log in code

	// This is called with the results from from FB.getLoginStatus().
  	function statusChangeCallback(response) {
    	console.log('statusChangeCallback');
    	console.log(response);

	    if (response.status === 'connected') {
	      	// Logged into your app and Facebook.
	      	console.log("logged into Facebook");

	    	var uid = response.authResponse.userID;
    		var accessToken = response.authResponse.accessToken;

    		console.log(uid);

    		// show divs for favorite & make a comment
    		document.getElementById("fav").style.visibility = "visible";
    		document.getElementById("lvComment").style.visibility = "visible";

    		
    		// onclick:
    		// if unselected, 
    		// toggle to selected & push to db
    		// else if selected
    		// toggle to unselected, and delete from db

    		// check to see if user favorited field
	    	// if fb user id == user id in ufavs array
	    	// then the star is selected
	    	// else
	    	// the star is deselected


	    } else {
	    	console.log("not logged in")
	    	document.getElementById("fav").style.visibility = "hidden";
    		document.getElementById("lvComment").style.visibility = "hidden";
	    }
	  }

	// This function is called when someone finishes with the Login
  	// Button.  See the onlogin handler attached to it in the sample
  	// code below.
  	function checkLoginState() {
  		console.log("checkLoginState");
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
			version    : 'v2.2', // use version 2.2
			status		: true
		});

		console.log("Facebook initialized");

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


	//=========== Populate the dynamic content

	$http.get('/details/' + id).success(function(response){	
			
			// $scope.result is populated with the response from the $http get call
			$scope.result = response;
			
			// $scope.tagline is populated with the result name + "Details"
			$scope.tagline = $scope.result.name + "Details" ;
			
			// zip is set to the zip of the result; zip is used to call weather API
			var zip = $scope.result.zip;
			var service_URL = "http://api.wunderground.com/api/ae9eea20a89e3294/geolookup/conditions/animatedradar/q/" + zip + ".json";

			$http.get(service_URL).success(function(parsed_json) {
		  	
		  	  var location = parsed_json['location']['city'];
		  	  var state = parsed_json['location']['state'];
		  	  var temp_f = parsed_json['current_observation']['temp_f'];

		  	  // populate the content div with the content from calling the weather api
		  	  var content = document.querySelector('#content');
		  	
		  	  content.innerHTML= "Current temperature in " + location + " " + state + " is: " + temp_f + " <img src='http://api.wunderground.com/api/ae9eea20a89e3294/radar/q/KS/"+ zip +".gif?width=280&height=280&newmaps=1'>";
			});
		});
		
});