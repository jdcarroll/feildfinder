// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Field', {
	name : {type : String},
	address: {type : String},
	city: {type : String},
	state: {type : String},
	zip: {type : Number},
	comments : [{body : String}],
	ufavs : [{users : String}]
});
