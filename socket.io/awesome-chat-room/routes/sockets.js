var io = require('socket.io');
exports.initialize = function(server) {
	io = io.listen(server);
	var self = this;

	this.chatInfra = io.of("/chat_infra")
		.on("connection", function(socket) {
			socket.on('join', function(roomData) {
				socket.join(roomData.roomName);
				socket.on("set_name", function(data) {
					socket.emit('name_set', {
						nickname: data.name,
						type: 'serverMessage',
						message: 'Welcome to the most interesting ' +
							'chat room on earth!'
					});
					socket.broadcast.to(roomData.roomName).emit('user_entered', data);
				});
			});

			socket.on('leave', function(roomData) {
				socket.leave(roomData.roomName);
			});

			socket.on("get_rooms", function() {
				var rooms = {};
				for (var room in io.sockets.manager.rooms) {
					if (room.indexOf("/chat_infra/") == 0) {
						var roomName = room.replace("/chat_infra/", "");
						rooms[roomName] = io.sockets.manager
						rooms[room].length;
					}
				}
				socket.emit("rooms_list", rooms);
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