exports.initialize = function() {
	var socket = require('socket.io-client')('http://localhost:3000');
	socket.on('connect', function() {
		console.log('connect');

		socket.send('hi');
		socket.emit('message', 'world');

		socket.on('message', function(msg) {
			console.log(msg);
		});
	});

	socket.on('error', function() {
		console.log('error');
	});
};