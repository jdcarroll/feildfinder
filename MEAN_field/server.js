// ********* KAR:  Need to update with correct db info! ******

// modules =================================================
var express        	= require('express');
var path 			= require('path');
var app            	= express();
var bodyParser     	= require('body-parser');
var methodOverride 	= require('method-override');
var mongojs 		= require('mongojs');

// configuration ===========================================
	
var db = mongojs('test', ['fields']);

// CRUD ====================================================

// READ all results from DB ================================
app.get('/results/:query', function(req, res){
	console.log('I recieved a get request');
	var query = req.params.query;

	db.fields.find({ zip : {$regex: '^' + query}}, function(err, docs){
		console.log(query);
		res.json(docs);
	})
})
// READ all results from DB ================================
//==========================================================
// READ ONE record on Details ==============================
app.get('/details/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.fields.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		
		res.json(doc);
	})
});
// READ ONE record on Details ==============================
//==========================================================
// CRUD ====================================================

// set our port
var port = process.env.PORT || 7000; 

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

app.get('*', function (req, res) {
        res.sendfile('public/index.html');
    })
// routes ==================================================
// pass our application into our routes
require('./app/routes')(app); 

// start app ===============================================
app.listen(port);	

// shoutout to the user
console.log('Magic happens on port ' + port); 	

// expose app		
exports = module.exports = app; 						