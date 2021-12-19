# In Class Assignment: Splatter Paint Lesson- Plan
## Marisa Laks

### Do Now: 
In the last night’s homework, you looked at Jackson Pollock’s art. Today we are going to learn how to make random splatter paint designs similar to Pollock’s work. Click on the link to see an example of the finished project: https://splatter-paint-demo.marisalaks.repl.co/

What do you notice about the design?

Click on the link and fork the file for your starter code: https://replit.com/@MARISALAKS/Splatter-Paint-Starter-Code#script.js

Look at the code. How can we change the following:
* the definition for the variable name to your name?
* the color of the circle?
* the position of the circle?
* the size of the circle?

Make the changes and run the code. What happens when you click on the canvas?

### Code Along:
Right now, our circle is in one specific spot. If we want to put a circle in different places on the canvas we can use a built-in function called mouseX and mouseY.

Change the parameters in the ellipse to mouseX and mouseY. Run your code. Click on the canvas and see what happens.

Now we are going to comment out the background in the draw function. What happens now? Why do we now see a trail? When we remove the background from the draw loop, we stop redrawing the background in each frame.

We will move the ellipse function call from the draw function and place it in the mousePressed function so that we place a circle where we click the mouse.

How can we draw more circles when each time we click the mouse? Write code for another ellipse and add to the coordinates. Play around with different locations and sizes. Try to make the two ellipses different colors.

What if we want our circles to be different sizes? We can use another built in function to make our circles random sizes. The function random() takes one or two parameters. Where else can we use the function random? We can also use random for the colors and we can give different parameters if we want to use specific color ranges.

### Splatter Paint Challenges:
Do some or all of the following:
* Write a new welcome message. Get user input to greet the user with their name.
* Add another line of text after the first that gives some instructions - like "click your mouse to splatter some paint."
* Add different shapes to your splatters.
* Change the color palette of your splatters.

Share your screen with your partner.


### Closing:
Choose students to share their screens to show their splatter paintings.

### Time Permitting;
Whiparound: If you had more time, what would you add?
