function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background('#DB351A');
}

function draw() {
  var xVal = 225;
  var yVal = 125;
  // put drawing code here
  ellipse(xVal,yVal,100,150);
  ellipse(mouseX,mouseY,100,150);

}
