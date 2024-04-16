function setup() {
 // put setup code here
 createCanvas(displayWidth,displayHeight);
 background('red');
}

function draw() {
  // put drawing code here

  if(mouseIsPressed){
    stroke('#FFFC00');
    fill('#009DFF');
    circle(mouseX,mouseY,100);
  }
  else {
    stroke('#009DFF');
    fill('#FFFC00');
    ellipse(mouseX, mouseY, 100, 50);
  }
    
}
