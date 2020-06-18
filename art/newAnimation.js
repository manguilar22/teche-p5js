let particle;
let num = 200;

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(1.3);
    colorMode(HSB);

    resetParticles();
}

function draw() {
    for (let i = 0; i < num; i++) {
        particle[i].draw();
        particle[i].update();
    }
}

function resetParticles() {
    particle = [];
    background(0);
    for (let i = 0; i < num; i++) {
        particle[i] = new Particle(width / 2, height / 2, 0.01, 0.3, 0.03);
    }
}

function mousePressed() {
    resetParticles();
}

class Particle {
    constructor(xStartingPosition, yStartingPosition, noiseIncreaseAmount, rotationSpeed, movementSpeed) {
        this.rOff = random(100);
        this.r = random(TWO_PI);
        this.x = xStartingPosition;
        this.y = yStartingPosition;
        this.movementSpeed = movementSpeed;
        this.increaseAmount = noiseIncreaseAmount;
        this.xv = 0;
        this.yv = 0;
        this.rotationSpeed = rotationSpeed;
    }

    draw() {
        stroke((frameCount / 3) % 255, 255, 255);
        line(this.x, this.y, this.x-this.xv, this.y-this.yv);
    }

    update() {
        this.rOff += this.increaseAmount;
        this.r += map(noise(this.rOff), 0, 1, -this.rotationSpeed, this.rotationSpeed);

        this.xv += cos(this.r) * this.movementSpeed;
        this.yv += sin(this.r) * this.movementSpeed;

        this.x += this.xv;
        this.y += this.yv;
    }
}