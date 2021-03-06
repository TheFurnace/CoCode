var socketCanvas;
var canvas;

function setup() {
	canvas = createCanvas(1000,900);
	background(51);
	console.log("canvas created");

	socketCanvas = io.connect('45.79.221.136:3000');
	socketCanvas.on('mouseCoords', newDrawing);

}

function newDrawing(mouseCoords) {
	noStroke();
	fill(255, 0, 100);
	ellipse(mouseCoords.x, mouseCoords.y, 8, 8);

}

function mouseDragged() {
	noStroke();
	fill(255);
	var mouseCoords = {
		x: mouseX,
		y: mouseY
	}

	socketCanvas.emit('mouseCoords', mouseCoords);

	ellipse(mouseX, mouseY, 8, 8);
	
}

function draw() {
	
}