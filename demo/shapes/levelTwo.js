
// for red, green, and blue color values
let r, g, b;

function setup() {
  createCanvas(720, 400);
  // Pick colors randomly
  r = 0
  g = 0
  b = 0
}

function draw() {
  background(127);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
}


function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, pmouseX,pmouseY); //360, 200);
  if (d < 100)
  {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

