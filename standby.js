//grab session id from local storage
var classID = localStorage.getItem("classID");
var userID = Date.now();

var user {
	this.classID: classID,
	this.userID: userID
}
//send id to server
var socket = io.connect('45.79.221.136:3000');
socket.emit('user', user);


//function for what to do when server finishes pairs

