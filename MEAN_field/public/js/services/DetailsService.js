angular.module('DetailsService', []).factory('Details', ['$http', function($http) {


	var mongojs = require('mongojs');
	var db = mongojs('test',['fields']);

	//var fieldInfo = db.fields.find([_id:$fieldId]);
 

	service.callWeather = function(){

	}

	return service, fieldInfo;

}]);