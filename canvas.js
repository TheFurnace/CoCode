var socketCanvas;
var canvas;

var mic, recorder, soundFile;

function setup() {
	canvas = createCanvas(1000,900);
	background(51);
	console.log("canvas created");

	socketCanvas = io.connect('45.79.221.136:3000');
	socketCanvas.on('mouseCoords', newDrawing);

	// create an audio in
	mic = new p5.AudioIn();

	// users must manually enable their browser microphone for recording to work properly!
	mic.start();

	// create a sound recorder
	recorder = new p5.SoundRecorder();

	// connect the mic to the recorder
	recorder.setInput(mic);

	// create an empty sound file that we will use to playback the recording
	soundFile = new p5.SoundFile();

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