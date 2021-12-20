function setup() {
  createCanvas(500, 600)
  background(220)
}

function draw() {
  background(220)
  fill(0)

  name = "YourName"
  text("Hello " + name, 20, 20)
  ellipse(50, 100, 10)


}

function mousePressed() {
  console.log("You clicked the mouse!")

}
