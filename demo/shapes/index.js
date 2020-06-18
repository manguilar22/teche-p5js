

function setup() {


	// Create Canvas 
	createCanvas(720, 400);
	background(200);

}

function draw() {
	// Set colors 
	fill(204,101,192,127); 
	stroke(127,63,120); 

	// Rectangle 
	rect(40,120,120,40); 

	// Ellipse 
	ellipse(240,240,80,80); 

	// Triangle 
	triangle(300,100,320,100,310,80); 

	// Design a Flower 
	translate(580,200); 
	noStroke(); 
	for(let i=0; i<10; i++){
		ellipse(0,30,20,80); 
		rotate(PI/5); 
	}

}
