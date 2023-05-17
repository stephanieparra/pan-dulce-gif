let spriteImages = [];

function setup() {
  createCanvas(400, 400);
  frameRate(2);

  for (let i = 1; i <= 9; i++) {
    spriteImages.push(loadImage("images/pan(" + i + ").png"));
  }
}

function draw() {
  background(238, 222, 254);
  image(spriteImages[frameCount % 9], 90, 90, 200, 200);
}
