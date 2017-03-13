function Ball(y) {
  this.x = windowWidth / 2
  this.y = y
  this.d = 50
  this.check = false
  this.collide = true

  this.render = function() {
    if(this.check == false) {
      fill(255);
      noStroke();
      ellipse(constrain(this.x, this.d, windowWidth - this.d), this.y, this.d / 2, this.d / 2);
    }
  }
  this.createCollide = function() {
    if(this.check && this.collide) {
      for(var i = 0; i < 150; i++) {
        collide.push(new Collide(constrain(this.x, this.d, windowWidth - this.d), this.y));
      }
      this.collide = false
    }
  }
  this.collision = function() {
    for(var i = 0; i < barriers.length; i++) {
      if(dist(this.x, this.y, barriers[i].x, barriers[i].y) < this.d - this.d / 2) {
        start = false
        this.check = true
        death = true
      }
    }
  }
  this.move = function(num) {
    //Movimiento
    if(num == 1) {
      this.x = this.x + windowWidth / 2
    } else if(num == 2) {
      this.x = this.x - windowWidth / 2
    }
    //Limite valor x
    if(this.x >= windowWidth) {
      this.x = windowWidth
    } else if(this.x <= 0) {
      this.x = 0
    }
  }
}

function Collide(x, y) {
  this.x = x
  this.y = y
  this.directionx = random(-2,2)
  this.directiony = random(-2,2)
  var alpha = 255
  if(this.directionx == 0 || this.directiony == 0) {
    this.directionx = random(-2,2)
    this.directiony = random(-2,2)
  }
  this.move = function() {
    this.x = this.x + this.directionx
    this.y = this.y + this.directiony
  }
  this.render = function() {
    stroke(255,255,255,alpha)
    strokeWeight(5)
    point(this.x, this.y);
    if(alpha <= 0) {
      collide.splice(0,collide.length)
    }
  }
  this.alpha = function() {
    alpha--
  }
}
