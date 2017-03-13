var ball;
var barriers = [];
var time;
var points = 0
var mode = true
var stars = [];
var collide = [];
var death = false
var start = false
var textVariable;





function setup() {
  createCanvas(windowWidth, windowHeight);
  align();
  ball = new Ball(windowHeight - windowHeight / 5);
  for (var i = 0; i < 200; i++) {
    stars[i] = new Star(random(0,windowWidth),random(0,windowHeight));
  }
  textVariable = floor(windowWidth * .07)
}

function draw() {
  time++
  background(0);
  score(128);
  newGame();
  if(start) {
    ball.render();
  }
  ball.collision();
  ball.createCollide();
  for(var i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].render();
    if(stars[i].x > windowWidth) {
      stars[i] = new Star(0, random(0, windowWidth))
    }
    if(stars[i].y > windowHeight) {
      stars[i] = new Star(random(0, windowHeight),0)
    }
  }
  for(var i = 0; i < barriers.length; i++) {
    barriers[i].newbarrier();
    barriers[i].move();
    barriers[i].render();
    //barriers[i].clearHistory();
  }
  for(var i = 0; i < collide.length; i++) {
    if(death == true) {
      collide[i].alpha();
    }
    collide[i].move();
    collide[i].render();
  }
}









//Alinear formas
function align() {
  rectMode(CENTER);
  ellipseMode(CENTER);
}
function keyPressed() {
  //Movimiento del Circulo
  if(keyCode == RIGHT_ARROW) {
    ball.move(1)
  } else if(keyCode == LEFT_ARROW) {
    ball.move(2)
  }
  //Empezar el juego
  if(mode) {
    if(keyCode == 32) {
      initialize();
      start = true
    }
  } else {
    if(keyCode == 32) {
      barriers.splice(0, barriers.length);
      initialize();
      start = true
    }
  }
}
function mousePressed() {
  //Movimiento del Circulo
  if(mouseX > windowWidth / 2 && mouseY > windowHeight / 2) {
    ball.move(1)
  } else if(mouseX < windowWidth / 2 && mouseY > windowHeight / 2) {
    ball.move(2)
  }
  //Empezar el juego
  if(mode) {
    if(dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2) < 50) {
      initialize();
      start = true
    }
  } else {
    if(dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2) < 50) {
      barriers.splice(0, barriers.length);
      initialize();
      start = true
    }
  }
}
//Puntaje
function score(size) {
  noStroke()
  fill(250, 250, 250,20);
  textSize(size);
  textAlign(CENTER,CENTER)
  if(start) {
    text(points, windowWidth / 2, windowHeight / 2);
  }
}
//Metodos de inicializacion
function initialize() {
  barriers.push(new Barrier(floor(random(1,4))));
  barriers.push(new Barrier(floor(random(1,4))));
  mode = false
  time = 0
  points = 0
  ball = new Ball(windowHeight - windowHeight / 5);
  death = false
}
function newGame() {
  if(start == false) {
    textSize(textVariable)
    noStroke()
    fill(250, 250, 250,20);
    ellipse(windowWidth / 2,windowHeight / 2,100,100 )
    fill(250, 250, 250,40);
    text("Touch to start", windowWidth / 2, windowHeight / 3);
    text("Score: " + points, windowWidth / 2, windowHeight / 1.5);
  }
}
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 150; i++) {
    stars[i] = new Star(random(0,windowWidth),random(0,windowHeight));
  }
  textVariable = floor(windowWidth * .07)
}
