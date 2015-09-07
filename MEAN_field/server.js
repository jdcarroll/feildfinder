// ********* KAR:  Need to update with correct db info! ******

// modules =================================================
var express        	= require('express');
var path 			= require('path');
var app            	= express();
var mongoose       	= require('mongoose');
var bodyParser     	= require('body-parser');
var methodOverride 	= require('method-override');
var mongojs 		= require('mongojs');



// configuration ===========================================
	
// config files
var db = require('./config/db');

// below is from Jeff's app; above is from the MEAN app
// see the mongoose connect below as well, we can set up a db server for the project
var db 	= mongojs('fieldlist', ['fieldlist']);

// set our port
var port = process.env.PORT || 7000; 

// connect to our mongoDB database 
// (commented out after you enter in your own credentials)
// mongoose.connect(db.url); 


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

// routes ==================================================
// pass our application into our routes
require('./app/routes')(app); 

// start app ===============================================
app.listen(port);	

// shoutout to the user
console.log('Magic happens on port ' + port); 	

// expose app		
exports = module.exports = app; 						