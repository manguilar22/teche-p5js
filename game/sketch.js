//Delcare Global Variables
var s;
var scl = 20;
var food;
playfield = 600;

// p5js Setup function - required

function setup() {
  createCanvas(playfield, 640);
  background(51);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

// p5js Draw function - required

function draw() {
  background(127);
  scoreboard();
  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();

  fill (255,200,100);
  rect(food.x,food.y, scl, scl);
}

// Pick a location for food to appear

function pickLocation() {
  var cols = floor(playfield/scl);
  var rows = floor(playfield/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);

  // Check the food isn't appearing inside the tail

  for (var i = 0; i < s.tail.length; i++) {
    var pos = s.tail[i];
    var d = dist(food.x, food.y, pos.x, pos.y);
    if (d < 1) {
      pickLocation();
    }
  }
}

// scoreboard

function scoreboard() {
  fill(0);
  rect(0, 600, 600, 40);
  fill(255);
  textFont("Georgia");
  textSize(18);
  text("Score: ", 10, 625);
  text("Highscore: ", 450, 625)
  text(s.score, 70, 625);
  text(s.highscore, 540, 625)
}

// CONTROLS function

function keyPressed() {
  if (keyCode === UP_ARROW){
      s.dir(0, -1);
  }else if (keyCode === DOWN_ARROW) {
      s.dir(0, 1);
  }else if (keyCode === RIGHT_ARROW) {
      s.dir (1, 0);
  }else if (keyCode === LEFT_ARROW) {
      s.dir (-1, 0);
  }
}
