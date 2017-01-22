//nodejs.org/api for API docs
//Node.js web server     
/*                    
var http = require("http"),                           //Import Node.js modules
    url = require("url"),                             
    path = require("path"),
    fs = require("fs");

http.createServer(function(request, response) {       //Create server 
var name = url.parse(request.url).pathname;           //Parse URL
var filename = path.join(process.cwd(), name);        //Create filename
fs.readFile(filename, "binary", function(err, file) { //Read file
    if(err) {                                         //Tracking Errors
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
    }
    response.writeHead(200);                          //Header request response 
    response.write(file, "binary");                   //Sends body response
    response.end();                                   //Signals to server that 
 });                                                  //header and body sent
}).listen(3000);                                      //Listening port 
console.log("Server is listening on port 3000.");     //Terminal output */


var express = require('express');

var app = express();
var http = require('http').Server(app);

var server = app.listen(3000);
app.use(express.static("../"));


var socket = require('socket.io');

var io = socket(server);

io.on('connection', newConnection);

var classRoom = function(code) {
    this.code = code;
    this.clients = [];
}

var rooms = [];

console.log("Listening on port 3000.");

/*io.on('connection', function(socket){
  console.log('a user connected');
});*/

/*
app.get('/', function(req, res){
  res.sendFile('index.html');
}); */

//BLOCK BELOW IS SHIFFMAN
function newConnection(socket) {
    console.log(socket.id);

    socket.on('user', sortUser);

    function sortUser(user) {


        var idExists = false;
        for (var i = 0; i < rooms.length && idExists == false; i++) {
            if(element.code == user.code) {
                element.clients.push(user);
                break;
                idExists = true;
            }
        };

        if(!idExists) {
            window.location = "../index.html";
        }

    }

    socket.on('mouseCoords', mouseMsg);
    function mouseMsg(mouseCoords) {
        socket.broadcast.emit('mouseCoords', mouseCoords);
    }

    socket.on('createRoom', function(code){
        rooms.push(new classRoom(code));
    });

    socket.on('destroy', function(code) {
        for (var i = 0; i < rooms.length && idExists == false; i++) {
            if(element.code == user.code) {
                console.log(user.code + " destroyed")
                element.splice(index, i);
                
                break;
            }
        };
    });

    socket.on('destroyAll', function() {
        rooms = [];
    });

    socket.on('start', function(code) {
        /*
        for (var i = 0; i < rooms.length; i++) {
            if(new String(rooms[i].code).value() == new String(code).value()) {
                for (var i = 0; i < 3; i++) {
                    rooms[i]
                }
            }
        }
        */
        socket.broadcast.emit('move');
    });

    socket.on('textUpdate', function() {

    });

}
/*
http.listen(3000, function(){
  console.log('listening on *:3000');
}); */ 