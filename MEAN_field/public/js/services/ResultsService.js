// Good reference for angular factories / service:
// http://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/
// Factories are the most popular way to create and configure a service. 
// You just create an object, add properties to it, then return that same object. 
// Then when you pass the factory into your controller, those properties on the 
// object will now be available in that controller through your factory. 

angular.module('ResultsService', []).factory('Results', ['$http', function($http) {

	
	var mongojs = require('mongojs');
	var db = mongojs('test',['fields']);

	$address = str.trim();
	$address2 = str.replace(" ","+");

    $contents = file.get.contents("https://maps.googleapis.com/maps/api/geocode/json?address={'$address2'}&key=AIzaSyDge7ELV8muCUhChWhVbmmV_gEH73OEQlM");
    $contents2 = file_get_contents("https://maps.googleapis.com/maps/api/geocode/json?address={'$raddress2'}&key=AIzaSyDge7ELV8muCUhChWhVbmmV_gEH73OEQlM")
	
	$encoded = json_decode($contents);
	$encoded2 = json_decode($contents2);

	db.fields.find([_id:""]);	

	var service = {};
	var _zip = '';

	service.setZip = function(zip){
		_zip = zip;
	}

	service.getZip = function(){
		return _zip;
	}

	/* service.getResults = function(zip){

	} */

}]);


// From Jeff's app:

// main read results function designed to pull all the main data from the database
/* app.get('/contactlist', function(req, res) {
	console.log('I recieved a get request');

	db.contactlist.find(function(err, docs){
		console.log('hello from the get results function');
		res.json(docs);
	})
});


// this is the logic for the main search functionality of the site
app.get('/searchcontactlist/:query', function(req, res){
	console.log('I recieved a get request');
	var query = req.params.query;
	
	db.fields.find({ zip : {$regex: '^' + query }}, function(err, doc){
		res.json(doc);
	});
});

*/
//******* Do not need below functionality for our app *******//
// Maybe for comments?

// Add new paint ball fields into the database
/* app.post('/contactlist', function(req, res){
	
	db.contactlist.save(req.body, function(err, doc){
		res.json(doc);
	});
}); */

