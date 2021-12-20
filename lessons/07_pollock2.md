# Art of Code: P5.js & Computer Art
## Lesson #8: Pollock Inspired Art (Day 2)

### Main objective:

Aim: I can use p5.js to create art using randomization and user input


### Standards:

9-12.CT.9: Systematically test and refine programs using a range of test cases, based on anticipating common errors and user behavior.\
9-12.IC.7: Investigate the use of computer science in multiple fields.


### Materials/Resources:

p5.js editor: https://editor.p5js.org/
Google Slides

### Do Now: (8 min)

Given the two lines of code below:

`fill(random(255), random(255), 0)`\
`ellipse(mouseX + random(10, 20), mouseY + random(10, 20), random(10))`

What does the function random() do in the fill function?\
What does the function random() do in the ellipse function?


### Mini-Lesson: (5 min)

Review of random() function:
- Takes either 0, 1 or 2 arguments.
- If no argument is given, returns a random number from 0 up to (but not including) 1.
- If one argument is given and it is a number, returns a random number from 0 up to (but not including) the number.
- If two arguments are given, returns a random number from the first argument up to (but not including) the second argument.

from p5.js Reference: https://p5js.org/reference/#/p5/random


### Splatter Paint Challenges: (15 min)

Open your splatter paint code from yesterday. Choose some or all of the following to do to your code:
- Write a new welcome message.
- Get user input to greet the user with their name.
- Add another line of text after the first that gives some instructions - like "click your mouse to splatter some paint."
- Add different shapes to your splatters.
- Change the color palette of your splatters.

Share your screen with your partner. (5 min)

Link for the starter code (if needed): https://editor.p5js.org/mlaks23/sketches/TVGUvjFn8

Splatter Paint Code Example: https://editor.p5js.org/mlaks23/sketches/fYQJPdQ-l


### Closing: (12 min)

Pollock Assessment:

Click on the link https://forms.gle/nGinD5bnn74UmVjt7. Answer the questions on the form. Use the code below for questions 2 to 5.

`function mousePressed() {`
  > `fill(0, 255, 0)`\
  > `ellipse(20, 40, 30)`

  > `fill(random(255), random(255), random(255))`\
  >`ellipse(mouseX, mouseY, random(20))`\
`}`

1. Write a line of code that asks a user to input their name.
2. What does the function mousePressed() do?
3. Describe the difference between the code in line 23 and the code in line 26.
4. Describe the difference between the code in line 24 and the code in line 27.
5. Change the code to make a blue circle of size 20.

Remember to save your code and submit the link on the google form.


### Homework:

Continue working on your code.
