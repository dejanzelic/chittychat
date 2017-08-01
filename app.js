// This is the main file of our chat app. It initializes a new 
// express.js instance, requires the config and routes files
// and listens on a port. Start the application by running
// 'node app.js' in your terminal


var express = require('express'),
	app = express();

// This is needed if the app is run on heroku:

var port = process.env.PORT || 8080;

// Initialize a new socket.io object. It is bound to 
// the express app, which allows them to coexist.

var io = require('socket.io').listen(app.listen(port));

// Require the configuration and the routes files, and pass
// the app and io as arguments to the returned functions.

var mysql = require('mysql');
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MySuperPassword",
  database: "chittychat"
});
db.connect(function(err) {
  if (err) throw err;
  db.query("DELETE FROM messages;",
	function(err, result){
		console.log('Database cleared');
	});
  console.log("Connected to database!");
});


require('./config')(app, io);
require('./routes')(app, io, db);
require('./client.js');

console.log('Your application is running on http://localhost:' + port);