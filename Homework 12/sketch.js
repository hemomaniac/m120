let playerX = 50;
let playerY = 50;
let playerSize = 30;

let obstacles = [];
let exitZone;

let clickedObstacle = null;

function setup() {
  createCanvas(600, 400);

  makeObstacles();
  makeExit();
}

function draw() {
  background(220);

  drawPlayerThing();
  doTheMoves();
  drawObbyThings();
  drawClickedThing();
  drawBorderThing();
  drawExitThing();
  didYouWinTho();
}

// playaaaaa
function drawPlayerThing() {
  fill(0);
  rect(playerX, playerY, playerSize, playerSize);
}

// da moves
function doTheMoves() {
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 3;
  } else if (keyIsDown(RIGHT_ARROW)) {
    playerX += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    playerY -= 3;
  } else if (keyIsDown(DOWN_ARROW)) {
    playerY += 3;
  }
}

// obsickslakdlasdsa 
function makeObstacles() {
  obstacles.push({ x: 200, y: 100, w: 80, h: 40, color: 'red' });
  obstacles.push({ x: 350, y: 250, w: 50, h: 100, color: 'blue' });
}

// obsickslakdlasdsa AGAIN
function drawObbyThings() {
  for (let i = 0; i < obstacles.length; i++) {
    fill(obstacles[i].color);
    rect(obstacles[i].x, obstacles[i].y, obstacles[i].w, obstacles[i].h);
  }
}

// clicked obstacle! (only one)
function drawClickedThing() {
  if (clickedObstacle !== null) {
    fill('green');
    rect(clickedObstacle.x, clickedObstacle.y, clickedObstacle.w, clickedObstacle.h);
  }
}

function mousePressed() {
  // only allow 1 if clicked
  if (clickedObstacle === null) {
    clickedObstacle = {
      x: mouseX,
      y: mouseY,
      w: 40,
      h: 40
    };
  }
}

// border moment
function drawBorderThing() {
  noFill();
  stroke(0);
  strokeWeight(4);
  rect(0, 0, width, height);
  noStroke();
}

// exit hehe (create)
function makeExit() {
  exitZone = { x: 520, y: 320, w: 60, h: 60 };
}

// exit hehe (draw)
function drawExitThing() {
  fill('yellow');
  rect(exitZone.x, exitZone.y, exitZone.w, exitZone.h);

  fill(0);
  textSize(12);
  text("EXIT", exitZone.x + 10, exitZone.y + 35);
}

// win condition
function didYouWinTho() {
  if (
    playerX > exitZone.x &&
    playerX < exitZone.x + exitZone.w &&
    playerY > exitZone.y &&
    playerY < exitZone.y + exitZone.h
  ) {
    fill(0);
    textSize(32);
    text("YOU WIN!!!!!! kinda...", 220, 200);
  }
}