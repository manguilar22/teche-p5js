let diam = 100;
let m = -1;
let mC = true;


let formulas = {};


function setup() {

        createCanvas(400,400);

        formulas = {
              animation: () => 3*frameCount%310,
              openMouth: (m) => sin(m)/8+PI/8,
              closeMouth: (m) => -PI*sin(m)/8-PI/8,
              eyePosition: (m) => sin(m)*15,
              eyeX: PI*3/2,
              eyeY: PI,
              };



}


function draw() {

        const {
               eyePosition,
               animation,
               openMouth,
               closeMouth
              } = formulas;


        background(0);

        noStroke();
        fill(255,200,10);

        ellipse(500-(animation()),200,30,30);

        arc(200,200,225,225,openMouth(m),closeMouth(m));

        m = m + 0.06;

        fill(0);

        //arc(240-eyePosition(m),140-eyePosition(m),15,28,PI*1/2,PI*3/2);



}
