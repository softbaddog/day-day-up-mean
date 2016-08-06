var socket = io.connect('/');
socket.on('message', function(data) {
	$('#messages').append('<div class="' + data.type + '">' + data.message +
		'</div>');
});
$(function() {
	$('#send').click(function() {
		var data = {
			message: $('#message').val(),
			type: 'userMessage'
		};
		socket.emit('message', data);
		$('#message').val('');
	});
});