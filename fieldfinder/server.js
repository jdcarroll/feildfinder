var express = require('express');
var path = require('path');
var app = express();

//Added by Jeff Carroll
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');
//Added by Jeff Carroll

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//Added by Jeff Carroll
app.use(bodyParser.json());
//Added by Jeff Carroll

app.get('/',function(req,res){

	res.render('./views/index');

});

//Added by Jeff Carroll


// main read results  function designed to pull all the main data from the database
app.get('/contactlist', function(req, res) {
	console.log('I recieved a get request');

	db.contactlist.find(function(err, docs){
		console.log('hello from the get results function');
		res.json(docs);
	})
});
// main read results function designed to pull all the main data from the database

// this is the logic for the main search functionality of the site
app.get('/searchcontactlist/:query', function(req, res){
	console.log('I have recied ');
	var query = req.params.query;
	
	db.contactlist.find({ zip : {$regex: '^' + query }}, function(err, doc){
		res.json(doc);
	});
});
// this is the logic for the main search functionality of the site

// this is the create part of crud adding new Paint Ball Fields into the database
app.post('/contactlist', function(req, res){
	
	db.contactlist.save(req.body, function(err, doc){
		res.json(doc);
	});
});
// this is the create part of crud adding new Paint Ball Fields into the database

// this is the D part of CRUD delete records/paintball fields form the database
app.delete('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
});
// this is the D part of CRUD delete records/paintball fields form the database

// this is the update portion of the database
	// this top portion grabs the requested record from the database
app.get('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		console.log('edit function to get stuff');
		res.json(doc);
	})
});

// this portion of the update function is that actual update of the specific function
app.put('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.name);
	db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)}, 
		update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number,}},
		new: true}, function (err, doc) {
			res.json(doc);
		});
});
// this portion of the update function is that actual update of the specific function
// this is the update portion of the database

//Added by Jeff Carroll


//I Commented this out because we are no longer using ejs
// app.get('/results',function(req,res){

// 	res.render('./views/results');

// });

// app.get('/details',function(req,res){

// 	res.render('./views/details');

// });

app.listen(7000);
console.log('Listening on port 7000');




