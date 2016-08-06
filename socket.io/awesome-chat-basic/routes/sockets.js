var io = require('socket.io');
exports.initialize = function(server) {
	io = io.listen(server);
	io.sockets.on("connection", function(socket) {
		// 服务器接收到连接时间，输出欢迎词
		socket.emit('message',{
			type: 'serverMessage',
			message: 'Welcome to the most interesting chat room on earth!'
		});
		// 服务器接收到message消息，将消息保存并广播 
		socket.on('message', function(message) {
			if (message.type == "userMessage") {
				socket.broadcast.emit('message', message);

				message.type = 'myMessage';
				socket.emit('message', message);
			}
		});
	});
};