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
server.listen(3008);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
	
});

