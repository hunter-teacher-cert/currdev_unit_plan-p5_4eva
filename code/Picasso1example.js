function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  // add your for loops below
  for(x = 0; x <= 400; x+=40){
    for (y = 0; y<=400; y+=40){
     fill(mouseX,y,x)
      ellipse(x,y,40)
      rect(x,y,40)
    }
  }
  

  
    ellipse(50,200,50,25)
  ellipse(200,200,300,400)
  
  
  triangle(200,100,300,200,200,300)
  // add a shape tha twill appear on top of the center triangle 
  line(200,100,150,50)
    ellipse(290,150,50,25)
  ellipse(290,150,20,20)
    arc(90,150,140,60,325,35,PIE)
  arc(100,150,100,40,345,15,PIE)
  arc(175,350,50,20,180,360)
  arc(225,350,50,20,180,360)
    arc(200,360,50,20,0,180)
  beginShape(TRIANGLE_STRIP);
vertex(80, 275);
vertex(90, 220);
vertex(90, 275);
vertex(110, 220);
vertex(120, 275);
vertex(130, 220);
vertex(140, 275);
endShape();

  

}
