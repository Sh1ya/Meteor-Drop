function Barrier(x) {
  this.y = 0
  this.d = 50
  this.check = true
  this.check2 = true
  this.size = floor(random(this.d / 3,this.d))

  if(x == 1) {
    this.x = 0
  } else if(x == 2) {
    this.x = windowWidth / 2
  } else if(x == 3) {
    this.x = windowWidth
  }

  this.move = function() {
    if(points < 90) {
      this.y = this.y + (0.01 * time / 2)
    } else {
      this.y = this.y + 17.5
    }
  }
  this.render = function() {
    fill(102, 51, 0)
    noStroke()
    rect(constrain(this.x, ball.d, windowWidth - ball.d), this.y, this.size, this.size)
  }
  this.newbarrier = function() {
    if(death == false) {
      if(this.y >= windowHeight / 2 && this.check == true) {
        barriers.push(new Barrier(floor(random(1,4))))
        this.check = false
      }
    }
    if(this.y >= windowHeight && this.check2 == true && death == false) {
      points = points + .5
      this.check2 = false
    }
  }
  /*this.clearHistory = function() {
  if(barriers.length > 6) {
  barriers.splice(barriers.length, 1)
}
}*/
}
