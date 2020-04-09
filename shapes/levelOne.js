

function setup(){

	createCanvas(700,200);
	background(200);

	// set colors
	fill(204,101,192,127);
	stroke(127,63,120);
}


function draw(){


	ellipse(500,80,155,55);

	circle(300,30,20);

	rect(120,550,55,55);

	square(200,70,55);

	triangle(60, 75, 58, 20, 100, 75);


	// Pacman

	fill(255,100,0);

  const myCurve = QUARTER_PI + PI + (PI/2);

  arc(50, 50, 100, 100, 0,myCurve, PIE);
}
