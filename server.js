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

console.log("WE RUNNING");

var express = require('express');

var app = express();
var http = require('http').Server(app);

console.log("pre lister");
var server = app.listen(3000);
app.use(express.static("../"));
console.log("post listen");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);


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

}
/*
http.listen(3000, function(){
  console.log('listening on *:3000');
}); */ 