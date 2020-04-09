	function setup() {


		createCanvas(710,400,WEBGL);

	}

	function draw() {


		background(250);

		// Materials
		normalMaterial();



		translate(-240, -100, 0);
		push();
		plane(70);
		pop();

		translate(240,0,0);
		push();
		box(70,70,70);
		pop();



		translate(240,0,0);
		push();
		cylinder(70, 70);
		pop();

		translate(-240 * 2, 200, 0);
	  	push();
	  	cone(70, 70);
	  	pop();

		translate(240,0,0);
		push();
		torus(70,20);
		pop();


		translate(240,0,0);
		push();
		sphere(70);
		pop();

	}
