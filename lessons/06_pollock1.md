# Art of Code: P5.js & Computer Art
## Lesson #7: Pollock Inspired Art (Day 1)

### Main objective:

Aim: I can use p5.js to create art using randomization and user input


### Standards:

9-12.CT.9: Systematically test and refine programs using a range of test cases, based on anticipating common errors and user behavior.\
9-12.IC.7: Investigate the use of computer science in multiple fields.


### Materials/Resources:

p5.js editor: https://editor.p5js.org/\
https://www.jackson-pollock.org/\
Google Slides


### Do Now: (7 min)

Click on the link: https://jacksonpollock.org/\
Play around with the site. Describe what happens when you drag and click your mouse.

Call on Students for answers.

(Possible Answers: As you move the mouse, there is a paint trail. When you click on the mouse, the color changes. If you stay in one place, the splotch is bigger)


### Mini-Lesson: (18 min)

Jackson Pollock (1912 - 1956) was a painter in the 1940s and 1950s. His artwork known as “drip paintings”  were in the  “Abstract Expression” style.

Show examples of some of Pollock’s work. Show two minutes of video: https://youtu.be/KnUvEcE7kPA

Today we are going to learn how to make random splatter paint designs similar to Pollock’s work. Click on the link to see an example of the finished project: https://splatter-paint-demo.marisalaks.repl.co/. What do you notice about the design?

Click on the link and save a copy of the file for your starter code: https://editor.p5js.org/mlaks23/sketches/TVGUvjFn8

Look at the code. How can we change the following:
the definition for the variable name to your name?
the color of the circle?
the position of the circle?
the size of the circle?

Make the changes and run the code. What happens when you click on the canvas?


### Code Along: (15 min)

Follow along with the teacher’s instructions. Add to your code as the teacher adds to the code.

Right now, our circle is in one specific spot. If we want to put a circle in different places on the canvas we can use a built-in function called mouseX and mouseY.

Change the parameters in the ellipse to mouseX and mouseY. (`ellipse(mouseX, mouseY, 10)`) Run your code. Click on the canvas and see what happens.

Now we are going to comment out the background in the draw function. What happens now? Why do we now see a trail? When we remove the background from the draw loop, we stop redrawing the background in each frame.

We will move the ellipse function call from the draw function and place it in the mousePressed function so that we place a circle where we click the mouse.

How can we draw more circles each time we click the mouse? Write code for another ellipse and add to the coordinates. Play around with different locations and sizes. Try to make the two ellipses different colors.

What if we want our circles to be different sizes? We can use another built in function to make our circles random sizes. The function random() takes one or two parameters. Where else can we use the function random? We can also use random for the colors and we can give different parameters if we want to use specific color ranges.

Remember to save your code.


### Closing: (5 min)

Whiparound: Choose one to answer: What was easy? What was difficult? What more would you like to add?


### Homework:

Jackson Pollock (1912 - 1956) was a painter in the 1940s and 1950s. His artwork known as “drip paintings”  were in the  “Abstract Expression” style.

1. Go to the website: https://www.jackson-pollock.org/

2. Read the biography and look at the paintings on the bottom of the page under the title “Masterpieces of Jackson Pollock.”

3. Answer the following questions:
  > a. What thoughts do you have about Jackson Pollock’s paintings?\
    b. Which painting do you like the most?\
    c. Why do you think his work is so popular?\
    d. Do you think he had a plan or did he paint at random?

Further Information:  https://www.moma.org/artists/4675
