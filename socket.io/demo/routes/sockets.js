exports.initialize = function(server) {
	var io = require('socket.io')(server);
	io.on('connection', function(socket) {
		socket.on('message', function(msg) {
			console.log('message:' + msg);
		});
		socket.on('hello', function(data) {
			console.log('hello:' + data);
		});
		socket.on('disconnect', function() {
			console.log('disconnect');
		});
	});
};