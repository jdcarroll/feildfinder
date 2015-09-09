

// grab the nerd model we just created
var Results = require('./models/results');

module.exports = function(app) {
	
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

        // sample api route
        app.get('/api/results', function(req, res) {
            // use mongoose to get all results in the database
            Results.find(function(err, results) {

                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(results); // return all results in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)



	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendFile('./public/index.html');
	});

};