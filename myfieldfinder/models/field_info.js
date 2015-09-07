var mongoose = require('mongoose');

// var options = {
// 	user:'root',
// 	pass:'root'

// }

mongoose.connect('mongodb://localhost:27017');

var fieldSchema = mongoose.Schema({
	_id: String,
	name: String,
	address: String,
	city: String,
	state: String,
	zip: Number,
	phone:String,
	comments:[],
	ufavs:[]
});

var fields = mongoose.model('fields',fieldSchema);

exports.find = function(callback){

	fields.find(function (err,results){

		if(err) return console.log(err);

		callback(results);

	});

};

