var socketCanvas;
var canvas;

function setup() {
	canvas = createCanvas(600,400);
	background(51);
	console.log("canvas created");

	socketCanvas = socket.io.connect('45.79.221.136:3000');


}

function draw() {
	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 36, 36);
}