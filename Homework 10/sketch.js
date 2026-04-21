let eye_speed_x1;
let eye_speed_x2;

let nose_speed_y;
let mouth_speed_y;

let shoulder_speed_x;
let shoulder_speed_y;

let title_speed;

function setup() {
  createCanvas(400, 500);

  eye_speed_x1 = random(0.01, 0.03);
  eye_speed_x2 = random(0.01, 0.03);

  nose_speed_y = random(0.01, 0.02);
  mouth_speed_y = random(0.01, 0.02);

  shoulder_speed_x = random(0.01, 0.02);
  shoulder_speed_y = random(0.01, 0.02);

  title_speed = 0.03;
}

function draw() {
  background(220);

  let headX = 200;
  let headY = 250;

  // title (grows and shrinks forever)
  let title_scale = map(sin(frameCount * title_speed), -1, 1, 18, 40);

  noStroke();
  fill(0);
  textSize(title_scale);
  textAlign(CENTER);
  text("Self Portrait", width / 2, 30);

  // head (MOVED ABOVE eyes so they are not covered cus im fuckin DUMB AS SHIT)
  fill(255, 220, 180);
  noStroke();
  ellipse(200, 250, 200, 260);

  // eyes (x-axis movement - 2 shapes)
  let eye_offset_x1 = sin(frameCount * eye_speed_x1) * 15;
  let eye_offset_x2 = cos(frameCount * eye_speed_x2) * 15;

  fill(255);
  ellipse(160 + eye_offset_x1, 220, 40, 30);
  ellipse(240 + eye_offset_x2, 220, 40, 30);

  fill(101, 67, 33);
  ellipse(160 + eye_offset_x1, 220, 15, 15);
  ellipse(240 + eye_offset_x2, 220, 15, 15);

  // nose (y-axis movement)
  let nose_offset_y = sin(frameCount * nose_speed_y) * 10;

  fill(255, 200, 170);
  triangle(
    200,
    230 + nose_offset_y,
    185,
    270 + nose_offset_y,
    215,
    270 + nose_offset_y
  );

  // mouth (y-axis movement - second shape)
  let mouth_offset_y = sin(frameCount * mouth_speed_y) * 10;

  stroke(0);
  line(170, 300 + mouth_offset_y, 230, 300 + mouth_offset_y);
  noStroke();

  // curl function (unchanged)
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

  // hair (unchanged)
  for (let x = 80; x < headX; x += 18) {
    for (let y = 110; y < 240; y += 22) {
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

  // shoulders (diagonal movement - x and y)
  let shoulder_offset_x = sin(frameCount * shoulder_speed_x) * 15;
  let shoulder_offset_y = cos(frameCount * shoulder_speed_y) * 10;

  fill(100, 100, 200);
  rect(130 + shoulder_offset_x, 350 + shoulder_offset_y, 140, 80);

  // freckles
  stroke(150, 100, 80);
  point(180, 260);
  point(200, 265);
  point(220, 260);

  // signature
  noStroke();
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("by Dalton", width / 2, 480);
}