var socket = io.connect('/');
socket.on('name_set', function(message) {
	$('#nameform').hide();
	$('#messages').append('<div class="systemMessage">' +
		'Hello ' + message.nickname + '</div > ');
});

socket.on('message', function(message) {
	if (message.nickname) {
		$('#messages').append('<div class="' + message.type +
			'"><span class="name">' +
			message.nickname + ":</span> " +
			message.text + '</div>');
	} else {
		$('#messages').append('<div class="' + message.type + '">' +
			message.text +
			'</div>');
	}
});

socket.on("user_entered", function(message) {
	$('#messages').append('<div class="systemMessage">' +
		message.nickname + ' has joined the room.' + '</div > ');
});

$(function() {
	$('#setname').click(function() {
		socket.emit("set_name", {
			nickname: $('#nickname').val()
		});
	});
	$('#send').click(function() {
		socket.emit('message', {
			text: $('#message').val(),
			type: 'userMessage',
			nickname: $('#nickname').val()
		});
		$('#message').val('');
	});
});