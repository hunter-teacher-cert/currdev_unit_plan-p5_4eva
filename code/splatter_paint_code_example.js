function setup() {
  createCanvas(500, 600)
  background(220)
}

name = prompt("What is your name? ")

function draw() {
  //background(220)
  fill(255, 0, 0)
  noStroke()

  text("Hello " + name + "!", 20, 20)
  text("Click to splatter the paint.", 20, 40)

  //move the ellipse to the mousePressed function
  //ellipse(mouseX, mouseY, 15)

}

function mousePressed() {
  print("You clicked the mouse!")

  fill(random(255), random(255), random(255))
  ellipse(mouseX, mouseY, random(20))

  //add another ellipse, but place it in a different position
  fill(0,255, 0)
  ellipse(mouseX + 10, mouseY + 10, random(10))

  fill(random(255),random(255), 0)
  ellipse(mouseX + random(10, 20), mouseY + random(10, 20), random(10))

  fill(random(255),random(255), 0)
  ellipse(mouseX + random(30,50), mouseY + random(20,50), random(30))
}
