// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(480, 270);
  stroke(0); 
  
}

function draw() {
  background(255);
  fill(150, 50, 10);
  rect(50,50,75,100);
  line(30, 20, 85, 75);
  fill(125);
  rect(20,20,50,50);
}