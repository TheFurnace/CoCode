var socket;
var canvas;

function setup() {
	canvas = createCanvas(600,400);
	background(51);
	console.log("canvas created")

	socket = io.connect('http://CoCode-mlh:80');


}

function draw() {
	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 36, 36);
}