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
	socket.on('start', function (data) {
		console.log('[DEBUG] Game started!');
		setTimeout(function () {
			socket.emit('location', {x: 10000, y: 10000});
		}, 1000);
	});

	setTimeout(function () {
		socket.emit('start', true);
	}, 3000);

	socket.on('loss', function (data) {
		console.log('[DEBUG] Game lost!');
		setTimeout(function () {
			socket.emit('start', true);
		}, 3000);
	});

	socket.on('win', function (data) {
		console.log('[DEBUG] Game won!');
		setTimeout(function () {
			socket.emit('start', true);
		}, 3000);
	});
});

