angular.module('MainCtrl', []).controller('MainController', function($scope) {

	// From Jeff's CRUD app:
	// Note:  refresh, update, create & destroy removed since those are not necessary for our app

    // search() is called when search button is clicked from zip code input field
    // the zip code is grabbed from the search box and the user is redirected to the 
    // results page with a get request (with the zip passed in the url) 
    $scope.search = function() {
        var squery = { name : $scope.query};
        $http.get('/results/' + $scope.query, squery).success(function(response) {
            $scope.resultsList = response;
        })
    };





});