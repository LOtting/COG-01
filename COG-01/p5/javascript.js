function setup() {
    createCanvas(1350, 400);
}

var up = 0;
var site = 0;

function draw() {
  var x = mouseX + site;
  var y = mouseY + up - 0.125;
  if(!mouseIsPressed){
    clear();
    background("blue");
    text("Daten: ", 10, 30);
    text("Maus-X: " + x, 10, 50);
    text("Maus-Y: " + y, 10, 70);
    text("Entfernung der Ente von der Maus:", 10, 110);
    text("X: " + site, 10, 130);
    text("Y: " + up, 10, 150);
    //Orange
    fill("orange");
    ellipse(x, 60+y-150, 80, 80);
    ellipse(x, 60+y-100, 120, 90);
    ellipse(x-60, 60+y-105, 30, 40);
    ellipse(x+55, 60+y-105, 30, 40);
    line(x-20, 60+y-60, x-19, 60+y-35);
    line(x+30, 60+y-60, x+31, 60+y-35);
    line(x+10, 60+y-190,x+13, 60+y-200);
    line(x, 60+y-190, x+1, 60+y-200);
    line(x-10, 60+y-190, x-13, 60+y-200);
    //Schwarz
    fill("black");
    triangle(x-20, 60+y-150, x-2, 60+y-135, x+21, 60+y-150);
    ellipse(x-20, 60+y-165, 20, 20);
    ellipse(x+10, 60+y-165, 20, 20);
    //Weis
    fill("white");
    ellipse(x+15, 60+y-170, 5, 5);
    ellipse(x-15, 60+y-170, 5, 5);
  }else {
    clear();
    background("green");
    text("Daten: ", 10, 30);
    text("Maus-X: " + x, 10, 50);
    text("Maus-Y: " + y, 10, 70);
    text("Entfernung der Ente von der Maus:", 10, 110);
    text("X: " + site, 10, 130);
    text("Y: " + up, 10, 150);
    //Orange
    fill("yellow");
    ellipse(x, 60+y-150, 80, 80);
    ellipse(x, 60+y-100, 120, 90);
    ellipse(x-60, 60+y-105, 30, 40);
    ellipse(x+55, 60+y-105, 30, 40);
    line(x-20, 60+y-60, x-19, 60+y-35);
    line(x+30, 60+y-60, x+31, 60+y-35);
    line(x+10, 60+y-190,x+13, 60+y-200);
    line(x, 60+y-190, x+1, 60+y-200);
    line(x-10, 60+y-190, x-13, 60+y-200);
    //Schwarz
    fill("blue");
    triangle(x-20, 60+y-150, x-2, 60+y-135, x+21, 60+y-150);
    ellipse(x-20, 60+y-165, 20, 20);
    ellipse(x+10, 60+y-165, 20, 20);
    //Weis
    fill("black");
    ellipse(x+15, 60+y-170, 5, 5);
    ellipse(x-15, 60+y-170, 5, 5);
  }
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    up = up - 5;
  }else if(keyCode == DOWN_ARROW){
    up = up + 5;
  }else if(keyCode == RIGHT_ARROW){
    site = site + 5;
  }else if(keyCode == LEFT_ARROW){
    site = site - 5;
  }
}

function deviceMoved() {
  up = Math.floor(Math.random()*11);
  site = Math.floor(Math.random()*11);;
}
