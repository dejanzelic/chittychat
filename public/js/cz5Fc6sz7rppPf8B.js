$('#block-user').on('click', function(){
	var socket = io();
	socket.emit('block');
});