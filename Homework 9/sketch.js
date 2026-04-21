function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(220);

  let headX = 200;
  let headY = 250;

//head
  fill(255, 220, 180);
  noStroke();
  ellipse(200, 250, 200, 260);

// eyes
  fill(255);
  ellipse(160, 220, 40, 30);
  ellipse(240, 220, 40, 30);

  fill(101, 67, 33);
  ellipse(160, 220, 15, 15);
  ellipse(240, 220, 15, 15);

  // nose
  fill(255, 200, 170);
  triangle(200, 230, 185, 270, 215, 270);

// mouth
  stroke(0);
  line(170, 300, 230, 300);
  noStroke();

// curl function
  function drawCurl(cx, cy, col) {
    push();
    stroke(col);
    noFill();

    let a = 0;
    let r = 1;

    beginShape();
    for (let i = 0; i < 35; i++) {
      let x = cx + cos(a) * r;
      let y = cy + sin(a) * r;
      vertex(x, y);

      a += 0.4;
      r += 0.6;
    }
    endShape();

    pop();
  }

  // hair redraw

  for (let x = 80; x < headX; x += 18) {
    for (let y = 110; y < 240; y += 22) {

     // lmfao this looks fucking insane but I like it more than anything else so far
      if (dist(x, y, headX, headY - 10) < 55) continue;

      drawCurl(x, y, color(240, 210, 90));
    }
  }

  for (let x = headX; x < 320; x += 18) {
    for (let y = 110; y < 240; y += 22) {

      if (dist(x, y, headX, headY - 10) < 55) continue;

      drawCurl(x, y, color(80, 50, 20));
    }
  }

  // shouldas
  fill(100, 100, 200);
  rect(130, 350, 140, 80);

  // tiny freckles
  stroke(150, 100, 80);
  point(180, 260);
  point(200, 265);
  point(220, 260);

  // title
  noStroke();
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Self Portrait", width / 2, 30);

  // signature babyybebebeeeee
  textSize(14);
  text("by Dalton", width / 2, 480);
}