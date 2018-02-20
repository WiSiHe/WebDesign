//var xoff1 = 0;
//var xoff2 = 1000;
var inc = 0.001;
var start = 0;
var lineOff = 30;
var lineAmount = 20;
function setup(){
	createCanvas(1920,1080);
}
function draw(){
	background(51);
	stroke(255,40,21);
	noFill();
	beginShape();
	var xoff = start;
	for (var x = 0; x < width; x++){
		stroke(255);

		var n = map(noise(xoff), 0, 1, 0, height);
		var s = map(sin(xoff),-1, 1, -50, 50);
		var y = s + n;
		vertex(x,y);
		for (var i = 0 ; i < lineAmount; i++){
			vertex(x+lineOff,y+lineOff);
		}
		xoff += inc;
	}
	endShape();
	start += inc;

}