class bubble  {
	constructor(x=50, y=100, r=100, red=10,g=10,b=100){
		this.x=x;
		this.y=y;
		this.r=r;
		this.red=red;
		this.g=g;
		this.b=b;
	};
	show() {
		noStroke();
		fill(this.red,this.g,this.b);
		ellipse(this.x, this.y, this.r);
	};
	move(){
		this.x=this.x-random(-3,3);
		this.y=this.y-random(-3,3);	
	};
	

	check(bubble){
		return(dist(bubble.x,bubble.y,this.x,this.y)<(bubble.r+this.r))
		
	}
}
var b=[50];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for(let i=0; i<50; i++){
		b[i] = new bubble(random(width), random(height), random(10,50));
	}
	
}

function draw() {
	background(0);
	
	b.forEach(element => {
		element.show();
		element.move();
	});
	b.forEach(element1 => {
		b.forEach(element => {
			if(element!=element1)
			if(element.check(element1))
{
	element.red=200;
	element1.red=200;
	element.show();
	element1.show();
}			//element.move();
		});
	});
}
