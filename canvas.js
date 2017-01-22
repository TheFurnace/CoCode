var socketCanvas;
var canvas;

function setup() {
	canvas = createCanvas(1000,900);
	background(51);
	console.log("canvas created");

	socketCanvas = io.connect('45.79.221.136:3000');
	socketCanvas.on('mouseCoords', newDrawing);

}

function newDrawing(data) {
	noStroke();
	fill(255, 0, 100);
	ellipse(data.x, data.y, 36, 36);

}

function mouseDragged() {
	noStroke();
	fill(255);
	var mouseCoords = {
		x: mouseX,
		y: mouseY
	}

	socketCanvas.emit('mouseCoords', mouseCoords);

	ellipse(mouseX, mouseY, 36, 36);
	
}

function draw() {
	
}