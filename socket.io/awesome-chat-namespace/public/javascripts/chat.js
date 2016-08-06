var chatInfra = io.connect('/chat_infra');
var chatCom = io.connect('/chat_com');

chatInfra.on('name_set', function(data) {
	$('#nameform').hide();
	$('#messages').append('<div class="systemMessage">Hello ' + data.nickname + '</div>');
});

chatInfra.on("user_entered", function(user) {
	$('#messages').append('<div class="systemMessage">' + user.name + ' has joined the room.' + '</div>');
});

chatInfra.on('message', function(message) {
	$('#messages').append('<div class="' + message.type + '">' + message.message + '</div>');
});

chatCom.on('message', function(message) {
	$('#messages').append('<div class="' + message.type + '"><span class="name">' +
		message.nickname + ':</span> ' + message.message + '</div>');
});

$(function() {
	$('#setname').click(function() {
		chatInfra.emit("set_name", {
			name: $('#nickname').val()
		});
	});

	$('#send').click(function() {
		chatCom.emit('message', {
			nickname: $('#nickname').val(),
			message: $('#message').val(),
			type: 'userMessage'
		});
		$('#message').val('');
	});
});