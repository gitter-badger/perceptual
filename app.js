/*
*/

var express = require('express'),
	path = require('path'),
	http = require('http');
var app = express();

/*
 * General config
 */
app.configure(function () {
	app.use(express.static(path.join(__dirname, 'public')));
});

// create the server
var server = http.createServer(app);
server.listen(app.get('port'), app.get('host'));