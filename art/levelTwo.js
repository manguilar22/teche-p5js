let dim;

let t;

function setup(){

	createCanvas(700,400);

	dim = width / 10;
	background(0);
	colorMode(HSB,360,100,100);
	noStroke();
	ellipseMode(RADIUS);
	frameRate(1);

	t = createSlider(1,10,1);

}


function draw() {


	background(0);
	/*
	for(let i = 0; i<= width; i+=dim){
		drawGradient(i,200);
	}
	*/

	/*
	for(let i = 0; i <= width; i += dim) {
		for (let j = 0; j <= height; j += height/4) {
			drawGradient(i,j);
		}
	}
	*/


	for(let i = 0; i <= width; i += dim) {
		for (let j = 0; j <= height; j += height/t.value()) {
			drawGradient(i,j);
		}
	}


}

function drawGradient(x,y) {


	let radius = dim / 2;

	let h = random(0,360);

	for(let r = radius; r > 0; --r) {
		fill(h,90,90);
		//square(x,y,r**2);
		ellipse(x,y,r,r);
		h = (h*1) % 360;
	}

}
