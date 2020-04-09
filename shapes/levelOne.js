

function setup(){

	createCanvas(700,200); 
	background(200); 

	// set colors 
	fill(204,101,192,127);
	stroke(127,63,120); 
}


function draw(){


	ellipse(80,80,55,55); 

	circle(30,30,20); 

	rect(50,20,55,55); 

	square(70,70,55); 
	
	triangle(30, 75, 58, 20, 86, 75); 

	point(85,55); 

	line(30, 20, 85, 75); 

	

	// Pacman

	fill(255,100,0);
	arc(50, 50, 100, 100, 0, QUARTER_PI + PI + (PI/2), PIE);

}

