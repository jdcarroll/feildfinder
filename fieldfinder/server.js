var express = require('express');
var path = require('path');
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



app.listen(7000);
console.log('Listening on port 7000');