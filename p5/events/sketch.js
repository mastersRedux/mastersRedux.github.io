var x = 100;

function setup() {
 // put setup code here
 createCanvas(displayWidth,displayHeight);
 background('red');
}

function draw() {
  // put drawing code here

  if(mouseIsPressed == true) {
    stroke('#406780');
    fill('#FFFC00');
    circle(mouseX,mouseY,100);
  }
  else{
    stroke('#FFFC00');
    fill('#406780');
    ellipse(mouseX,mouseY,100,25);
  }


}
