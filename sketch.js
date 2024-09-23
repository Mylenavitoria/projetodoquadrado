function setup() {
  createCanvas(400, 400);
  background("pink")
}

function draw(){
  fill("purple")
  stroke("black")  
  if(mouseIsPressed)
  rect(mouseX, mouseY, 100, 100);
}