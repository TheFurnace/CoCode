//grab session id from local storage
var classID = localStorage.getItem("classID");

//send id to server
var socket = io.connect('45.79.221.136:3000');


//function for what to do when server finishes pairs

