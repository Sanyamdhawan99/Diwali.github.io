var fireworks = [];
var gravity;
	
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	colorMode(HSB);
	gravity = createVector(0, 0.2);
	stroke(255);
	strokeWeight(8);
	background(0);	
}

function draw() {
	colorMode(RGB);
	background(0, 0, 0, 25);
	// every frame there is a 3% chance of making a new firework
	if(random(1) < 0.06) {
		fireworks.push(new Firework());
	}
	for(var i = fireworks.length - 1; i >= 0; i--) {
		fireworks[i].update();
		fireworks[i].show();
		if(fireworks[i].done()) {
			fireworks.splice(i, 1);
		}
	}
	console.log(fireworks.length);
}