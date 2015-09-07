angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	$scope.tagline = 'Nothing beats a pocket protector!';

	var refresh = function(){
    	$http.get('/contactlist').success(function(response){
	    	console.log('I recieved the data that I requested');
	    	$scope.contactList = response;
	    	$scope.contact = "";
	    	console.log('refresh ajax call running client side')
    	});
    };

    refresh();

});