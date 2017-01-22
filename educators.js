var code = Date.now().toString;
code = code.substring(code.length-6, code.length-1);

Document.getElementById('roomCode').innerHTML = code;

var socket = io.connect('45.79.221.136:3000');
socket.emit('createRoom', code);

function beginSession() {
	socket.emit('start', code);
}