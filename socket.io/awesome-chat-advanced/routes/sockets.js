var io = require('socket.io');
exports.initialize = function(server) {
	io = io.listen(server);

	io.on('connection', function(socket) {

		socket.on('message', function(message) {
			if (message.type == 'userMessage') {
				socket.broadcast.emit('message', message);

				message.type = 'myMessage';
				socket.emit('message', message);
			}
		});

		socket.on('set_name', function(data) {
			socket.emit('name_set', data);
			socket.emit('message', {
				type: 'serverMessage',
				text: 'Welcome to the most interesting chat room on earth!'
			});
			socket.broadcast.emit('user_entered', data);
		});

	});
};