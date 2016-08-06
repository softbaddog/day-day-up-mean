var io = require('socket.io');
exports.initialize = function(server) {
	io = io.listen(server);

	var chatInfra = io.of("/chat_infra")
		.on("connection", function(socket) {
			socket.on("set_name", function(data) {
				socket.emit('name_set', {
					nickname: data.name,
					type: 'serverMessage',
					message: 'Welcome to the most interesting ' +
						'chat room on earth!'
				});
				socket.broadcast.emit('user_entered', data);
			});
		});
	var chatCom = io.of("/chat_com")
		.on("connection", function(socket) {
			socket.on('message', function(message) {
				if (message.type == "userMessage") {
					socket.broadcast.emit('message', message);

					message.type = "myMessage";
					socket.emit('message', message);
				}
			});
		});
};