function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  
// Write a line of code that draws a vertical black line:
  
  stroke("black");
  strokeWeight(7)
  
  line(50, 0, 50, 400);
  
  line(100, 0, 100, 400);
  
  line(170, 100, 170, 200);
  
  line(170, 300, 170, 400);
  
  line(240, 0, 240, 400);
  
  line(340, 0, 340, 400);
  

  
  
// Write a line of code that draws a horizontal red line:
  
  //stroke("red");
   line(0, 100, 400, 100);
  
  line(0, 200, 400, 200);
  
  line(0, 250, 400, 250);
  
  line(0, 340, 400, 340);
  
// Write a line of code that draws a black or gray rectangle:
  
  strokeWeight(5);
  stroke("black");
  fill("black");
  rect(50,0,50,100)
  
// Write a line of code that draws a blue, yellow, or red rectangle:
  
  fill("blue")
  rect(100,250,140,90)
  
  fill("yellow")
  rect(50,200,50,50)
  
  fill("black")
  rect(170,100,170,100)
  
  fill("red")
  rect(240,200,100,50)
  
  fill("red")
  rect(240,340,100,62)
  
//  What color is your rectangle? How would you change its color?
  
  
}
