


function setup() {
    createCanvas(800,800);
    background("white");
    colorMode(HSB);
    noLoop();
}


function draw() {

    noStroke();


    var size = 50;

    for(var x = size; x <= 800 - (2*size); x += size) {
        for(var y = size; y < 800 - (2*size); y+= size) {

            var huel = random(360);
            fill(huel,80,90);
            rect(x,y,size,size);
        }
    }

    stroke(0);
    noFill();
    rect(0,0,800,800);

}