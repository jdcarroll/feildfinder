angular.module('GeekCtrl', []).controller('GeekController', function($scope, $routeParams, $http) {

	var detailsIdx = $routeParams.detailsIdx;

	$scope.tagline = detailsIdx;	

	var getItem = function(){
		$http.get('/geeks/:detailsIdx', detailsIdx).success(function(response){
			$scope.contact = response;
			console.log(response);
		})
	}

	getItem();

});