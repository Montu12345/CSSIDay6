let brushHue, backgroundColor, coinX, coinY, score, time, gameIsOver, hit;

let mySound;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  backgroundColor = 95;
  
  //setting the coin coordinates to random positions on the canvas
  coinX = random(width);
  coinY = random(height);
  
  //setting timer to 1000
  time = 1000;
  gameIsOver = false;
  score = 0;
  colorMode(HSB, 360, 100, 100);
  
  //seeting the color of the coin and mouse
  coinColor = 20;
  mouseColor = 20;
  radius = 20;
  randomm = 0;
  //mySound = loadSound();
  //mySound2 = loadSound('assets/movie_1.mp3');
}

function draw() {
  background(backgroundColor);
  rotation();
  fill(coinColor, 50, 100);
  ellipse(coinX, coinY, radiusX, radiusY);
  fill(mouseColor, 50, 100);
  ellipse(mouseX, mouseY, 20);
  fill(0);
  text(`Time remaining: ${time}`, 20, 40);
  //text("When black, score increa", 20, 40);

  handleTime();

  hit = collideCircleCircle(coinX, coinY, 20, mouseX, mouseY, 20);
  textAlign(LEFT);
  text(`Score: ${score}`, 20, 80);

  if (hit) {
    handleCollision();
  }
}

function handleCollision() {
  // We'll write code for what happens if your character hits a coin.
  if (gameIsOver) {
    score = score;
  } else {
    score += 1;
    coinX = random(width);
    coinY = random(height);
    coinColor = random(360);
    mouseColor = random(360);
    //mySound.play();
  }
}

//keeps track of the time and when the timer should say times up!
function handleTime() {
  if (time > 0) {
    time -= 1;
  } else {
    gameIsOver = true;
    text("Game is over", 20, 60);
    backgroundColor = 0;
    fill(100);
    textAlign(CENTER);
    text("Game is over", width / 2, height / 2);
    textAlign(CENTER);
    text("Click R to play again", width / 2 + 20, height / 2 + 20);
  }
  // We'll write code to handle the time.
}

//press R to restart
function keyTyped() {
  if (key === 'R' || key === 'r') {
    setup();
  }
}

//function to animate the coin to make it look like its turning
function rotation(){
  if (randomm%5 == 0){
    radiusX = 20;
    radiusY = 20;
  }
  if (randomm%5 == 1){
    radiusX = 20/2;
    radiusY = 20;
  }
  if (randomm%5 == 2){
    radiusX = 0;
    radiusY = 20;
  }
  if (randomm%5 == 3){
    radiusX = 20/2;
    radiusY = 20;
  }
  if (randomm%5 == 4){
    radiusX = 20;
    radiusY = 20;
  }
  randomm += 1;
 
  if (gameIsOver){
    radiusX = 20;
  }
}
