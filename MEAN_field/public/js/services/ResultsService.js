angular.module('ResultsService', []).factory('Results', ['$http', function($http) {

	

}]);

// From NerdService:
angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

	return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/nerds');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/nerds', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }
    }       

	

}]);


// From Jeff's app:

// main read results function designed to pull all the main data from the database
app.get('/contactlist', function(req, res) {
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
	
	db.contactlist.find({ zip : {$regex: '^' + query }}, function(err, doc){
		res.json(doc);
	});
});


//******* Do not need below functionality for our app *******//
// Maybe for comments?

// Add new paint ball fields into the database
app.post('/contactlist', function(req, res){
	
	db.contactlist.save(req.body, function(err, doc){
		res.json(doc);
	});
});

