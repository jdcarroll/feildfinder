var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var mod = require('./models/field_info.js');
var app = express();

app.set('views',__dirname);
app.set('view engine','ejs');


app.use(express.static(__dirname + '/public'));


app.get('/',function(req,res){

	res.render('./views/index');

});

app.get('/results',function(req,res){

	res.render('./views/results');

});

app.get('/getMessages',function(req,res){


	mod.find(function(data){
		console.log(data);
		res.setHeader('Content-Type','application/json');
		res.send(JSON.stringify({data: data}, null, 3));
	});

	

});



app.listen(7000);
console.log('Listening on port 7000');