let mass = []; 
let velocityX = []; 
let velocityY = []; 
let positionX = []; 
let positionY = []; 

function setup() {
  createCanvas(400, 400);
  noStroke(); 
  fill(64,255,255,192); 
}

function draw() {
  background(32);
  
  for(let particleA = 0; particleA < 10; particleA++) {
  
    let accelerationX = 0, accelerationY = 0; 
    
    for (var particleB = 0; particleB < 10; particleB++) {
    
    }
    
		velocityX[particleA] = velocityX[particleA] * 0.99 + accelerationX * mass[particleA];
		velocityY[particleA] = velocityY[particleA] * 0.99 + accelerationY * mass[particleA];
    
    
  }
  
  for (var particle = 0; particle < mass.length; particle++) {
		positionX[particle] += velocityX[particle];
		positionY[particle] += velocityY[particle];
		
		ellipse(positionX[particle], positionY[particle], mass[particle] * 1000, mass[particle] * 1000);
	}
  
  
}

function addNewParticle() {
	mass.push(random(0.003, 0.03));
	positionX.push(mouseX);
	positionY.push(mouseY);
	velocityX.push(0);
	velocityY.push(0);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseClicked() {
	addNewParticle();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseDragged() {
	addNewParticle();
}
