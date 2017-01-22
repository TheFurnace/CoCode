//grab session id from local storage
var code = localStorage.getItem("code");
var name = localStorage.getItem("name");
var userID = Date.now();

var user {
	this.code: code,
	this.userID: userID,
	this.name: name

}

//send user to server
var socket = io.connect('45.79.221.136:3000');
socket.emit('user', user);


//function for what to do when server finishes pairs

