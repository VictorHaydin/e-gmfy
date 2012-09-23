var mongoose = require('mongoose')
  , db = mongoose.createConnection('localhost', 'test');

module.exports = function() {
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function () {
	  // yay!
	});

	var greetingSchema = new mongoose.Schema({
		name: 'string'
	});

	var Greeting = db.model('Greeting', greetingSchema);

	function saveGreeting(name) {
		var greeting = new Greeting({name: name});
		greeting.save(function(err) {
			if(err) {
				console.log(err);
			}
		});
	}

	function getGreetings(callback) {
		Greeting.find(function(err, greetings) {
			if(!err) {
				if(callback) {
					callback(greetings);
				}
			}
			else {
				console.log(err);
			}
		});
	}

	return {
		saveGreeting: saveGreeting,
		getGreetings: getGreetings
	};
}