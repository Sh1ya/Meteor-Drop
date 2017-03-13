function Star(x, y) {
  this.x = x
  this.y = y
  this.shootingStar = random(100)

  this.move = function() {
    if(this.shootingStar < 1) {
      this.x = this.x + 3
      this.y = this.y + 3
    } else {
      this.x = this.x + 0.2
      this.y = this.y + 0.2
    }
  }
  this.render = function() {
    var r = floor(random(0,4))
    var alpha;
    if(r == 0) {
      alpha = random(0,255)
    } else {
      alpha = 255
    }
    stroke(255,255,255,alpha)
    strokeWeight(2)
    point(this.x, this.y)
  }
}
