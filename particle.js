function Particle(x, y, hu, firework) {
	this.position = createVector(x,y);
	this.firework = firework;
	this.lifespan = 255;
	this.hu = hu;

	if(this.firework){
		this.velocity = createVector(0,random(-17, -8));
	}
	else {
		//this.velocity = createVector(random(-27, -20),random(-27, -20));
		this.velocity = p5.Vector.random2D();
		this.velocity.mult(random(4, 10));
	}
	this.acceleration = createVector(0,0);

	this.applyForce = function(force) {
		// force = mass*acceleration, here mass = 1 so, the force is the sum of all accelerations
		this.acceleration.add(force);
	}

	this.update = function() {
		if(!this.firework) {
			this.velocity.mult(0.9);
			this.lifespan -= 4;
		}

		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		// clear out acceleration, so that everytime the acceleration starts from 0
		this.acceleration.mult(0);
	}

	this.done = function() {
	    if(this.lifespan < 0) {
	      return true;
	    }
	    else {
	      return false;
	    }
  	}

	this.show = function() {
		colorMode(HSB);
		if(!this.firework){
			strokeWeight(2);
			stroke(hu, 255, 255, this.lifespan);
		}
		else {
			strokeWeight(4);
			stroke(hu, 255, 255);
		}
		point(this.position.x, this.position.y);
	}


}
