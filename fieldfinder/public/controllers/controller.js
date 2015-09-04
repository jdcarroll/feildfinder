var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
    $routeProvider
        .when("/results",{
            templateUrl: "views/results",
            controller: "AppCtrl"
        })
});
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
    var block = 0;
    var refresh = function(){
    	$http.get('/contactlist').success(function(response){
	    	console.log('I recieved the data that I requested');
	    	$scope.contactList = response;
	    	$scope.contact = "";
    	});
    };

    refresh();

    $scope.search = function() {
        var squery = { name : $scope.query};
        $http.get('/searchcontactlist/' + $scope.query, squery).success(function(response) {
            $scope.contactList = response;
        })
    };



    $scope.addContact = function() {
        for(prop in $scope.contact){
            if (prop != null){
                console.log('empty prop');
            }
        }
    	if (block == 0 && $scope.contact.name != null && $scope.contact.street != null && $scope.contact.city != null ){
    		console.log($scope.contact);
    		console.log($scope.contact.name);
	    	$http.post('/contactlist', $scope.contact).success(function(response){
	    		console.log(response);
	    		refresh();
	    	});
    	} else {

    	}
    };

    $scope.remove = function(id){
    	console.log(id);
    	$http.delete('/contactlist/' + id).success(function(response){
    		refresh();
    	});
    };

    $scope.edit = function(id){
    	block = 1;
    	console.log(id);
    	$http.get('/contactlist/' + id).success(function(response){
    		$scope.contact = response;
    	});
    };

    $scope.update = function() {
    	console.log($scope.contact._id);
    	$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
    		refresh();
    	});
    };

    $scope.deselect = function(){
    	$scope.contact = "";
    	block = 0;
    }

}]);