var socketCanvas;
var canvas;

function setup() {
	canvas = createCanvas(550,450);
	background(51);
	console.log("canvas created");

	canvas.parent('dabox');

	socketCanvas = io.connect('45.79.221.136:3000');
	socketCanvas.on('mouseCoords', newDrawing);
	socketCanvas.on('textUpdate', textUpdated);

}

function newDrawing(mouseCoords) {
	noStroke();
	fill(255, 0, 100);
	ellipse(mouseCoords.x, mouseCoords.y, 8, 8);

}

function keyTyped() { //mouseDragged
	var text = editor.getValue();
	console.log(text);

	if(key == 7) {
		dis();
	}
	
	socketCanvas.emit('textUpdate', text);
}

function textUpdated(textUpdate) {  //newDrawing
	editor.setValue(textUpdate);
}

var RUNNING = true;

function mouseDragged() {
	if(RUNNING) {
		noStroke();
		fill(255);
		var mouseCoords = {
			x: mouseX,
			y: mouseY
		}

		socketCanvas.emit('mouseCoords', mouseCoords);

		ellipse(mouseX, mouseY, 8, 8);
	}
	
}

function dis() {
	RUNNING = false;
}