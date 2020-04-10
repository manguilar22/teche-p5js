
let red, green, blue = 0; 


function draw() {

	const r = red.value(); 
	const g = green.value(); 
	const b = blue.value(); 
		
	background(r, g, b);
  	text(`Red is equal to ${r}`, red.x * 2+red.width,25);
  	text(`Green is equal to ${g}`, green.x * 2+green.width , 60);
  	text(`Blue is equal to ${b}`, blue.x * 2+green.width , 25*3.5);



}


function setup() { 

	createCanvas(900,900); 
	
	red = createSlider(1,255,1); 
	green = createSlider(1,255,1); 
	blue = createSlider(1,255,1); 

	red.position(20,20); 
	green.position(20,50); 
	blue.position(20,80); 


}
