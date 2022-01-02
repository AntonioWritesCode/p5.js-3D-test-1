var angle = 0;
let nums = [25, 35, 65, 75];

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(175);
  
  cube();
}

function cube(){
  
    directionalLight(255, mouseX - 200, mouseY - 200, 0);
  
  push();
  translate(-45, 20, 0);
  
  for(i = 0; i < 4; i++){
  rotateY(angle * 0.08);
  rotateX(angle * 0.04);
  fill(25, 155);
  stroke(20);
  box(i * 10 + 10, 20, nums[1], nums[1]);
  }
  
  angle += 0.08;
  pop();
  
  push();
  translate(30, 30, 0);
  for()
  rotateY(angle * 0.08);
  rotateX(angle * 0.04);
  fill(25, 155);
  stroke(20);
  box(10, nums[1], nums[1]);
  pop();
  
}