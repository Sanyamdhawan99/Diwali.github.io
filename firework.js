function Firework() {

  this.hu = random(255);
  this.firework = new Particle(random(width), height, this.hu, true);
  this.exploded = false;
  this.particles = [];

  this.done = function() {
    if(this.exploded && this.particles.length === 0) {
      return true;
    }
    else {
      return false;
    }
  }

  this.update = function() {
    if(!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();

      if(this.firework.velocity.y >= 0) {
        this.exploded = true;

        this.explode();
      }
    }

     for(var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if(this.particles[i].done()) {
        // splice is a javascript function that deletes something from the array
        this.particles.splice(i, 1);
      }
    }

  }

  this.explode = function() {
    for(var i = 0; i < 100; i++) {
      var x = 16 * pow(sin(i), 3);
      var y = 13 * cos(i) - 5 * cos(2 * i) - 2 * cos(3 * i) - cos(4 * i);
      var p = new Particle(this.firework.position.x, this.firework.position.y, this.hu, false);
      this.particles.push(p);
    }
  }

  this.show = function() {
    if(!this.exploded) {
      this.firework.show();
    }

    for(var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }

  }
}