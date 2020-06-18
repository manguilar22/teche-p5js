

function setup(){

	createCanvas(700,700);
	background(200);

	// set colors
	//fill(204,101,192,127);
	//stroke(127,63,120);
}


function draw(){


	ellipse(250,68,155,55);

	circle(70,30,20);

	rect(600,100,150,125);

	square(400,400,200);

	triangle(90,180, 58, 20, 100, 75);


	console.log(mouseX,mouseY);


	// Pacman

	fill(255,100,0);

	const myCurve = QUARTER_PI + PI + (PI/2);

	arc(350, 350, 100, 100, 0,myCurve, PIE);
}

