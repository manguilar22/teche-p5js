

let maxDistance; 

function setup(){


	createCanvas(710,400); 
	noStroke(); 
	maxDistance = dist(0,0,width,height); 


}


function draw(){


	background(0); 

	for(let i = 0; i <= width; i+=20) { 
	  for(let j=0; j<=height; j+=20) { 
		  let size = dist(mouseX,mouseY,i,j);
		  size = (size / maxDistance*66); 
		  ellipse(i,j,size,size); 
	  }

	}
}
