function setup() {
	createCanvas(windowWidth, windowHeight);
}
var x = 0;
var y = 0;
var col = {
	r : 0,
	g: 0,
	b: 0
};
function draw() {
	while(y<=height){
		x = 0;
		while(x<=width){
			col.r = random(0,255);
			col.g = random(0,255);
			col.b = random(0,255);
			fill(col.r, col.g, col.b);
			stroke(col.r, col.g, col.b);
			ellipse(x, y, 24,24);
			x = x+50;
		}
		y=y+50;
	}
}