# The Art of Code: p5.js & Computer Art
by Marisa Laks, Ian Scheffler, Eric Wilson, Emma Wingreen

-----

## General Overview
The nuts and bolts of computing--loops, variables, arrays--can be scary and
downright confusing, especially if they're not placed in a meaningful context.

The goal of this unit is to embed learning some basic programming skills--namely,
storing data in variables, using conditional statements, and controlling the flow of
a program using loops--in the context of making art using p5.js.

By the end of the unit, students will be able to combine these disparate skills
to demonstrate their understanding via a performance task: the creation of a work
of art, broadly understood as a static image or a short animation. They will learn how to write code in p5.js. Examples of projects students could create are: https://splatter-paint-demo.marisalaks.repl.co/, https://finalproject.marisalaks.repl.co/.  

To ensure alignment with the pedagogical goals of the unit, students will be
provided with a checklist to ensure that their final product includes all necessary
technical elements. (This will also be represented in the final task rubric.)

Another signal feature of the unit is that students will build the final product
*as they go*. In other words, they will iteratively add on to their final art
as they learn new computing skills.

The unit will also incorporate some elements of art and science history, allowing
students to see how particular artists, styles, and movements relate to computing concepts.
(Islamic art and the works of certain modern artists, like Kandinsky and Mondrian, seem
particularly well suited in this regard.)

Ideally, this unit will help students develop the stance that, as programmers, their goal
is not just to write lines of code, but to create something new, original, and meaningful.

In short, by coding in the context of art, the unit aims to inculcate the stance that,
at root, coding *is* art.

This unit is designed to be a supplemental unit to a high school or middle school CS class, not necessarily of the AP variety. The idea is that most students will have familiarity with block-based programming, but not all students are necessarily comfortable with text-based programming.

This unit expects that students will have encountered most of the programming concepts before--such as loops, variables, and conditionals--but not in the context of text-based programming. The unit is designed to come closer to the end of the year, once students have encountered the fundamental concepts named above at least once.

In other words, this unit provides a chance to deepen understanding of some fundamental programming concepts, by revisiting them in a new way. (In an AP CSP course, this might take place after the AP Exam.)

---

## Motivation for Unit
For too many students, coding feels fun at first, but can then become a boring slog,
through terms and concepts that feel too much like math class, and much less like
what they were excited about in the first place.

This unit aims to ground the nuts and bolts of programming--variables, conditionals,
flow control--in the tangible and highly engaging context of artistic production.

This will build motivation, and also help students retain information, in much the same
way any project-based learning task hopes to do.

This unit also offers the chance for direct co-teaching and collaboration across
departments; at schools with an art teacher, artistic concepts from that class
can be woven into this unit. (Since p5.js is a very flexible language, students will
have a wide latitude in the kind of art they can create.)

---

## Standards Referenced
We are using the NYS K-12 Computer Science and Digital Fluency Standards, in order to become more familiar with them, since these standards
are in the process of being rolled out across the DOE. Standards assessed in this unit include:
+ **7-8.CT.7**: Design or remix a program that uses a variable to maintain the current value of a key piece of information.
+ **7-8.CT.8**: Develop or remix a program that effectively combines one or more control structures for creative expression or to solve a problem.
+ **9-12.DL.2**: Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
+ **9-12.DL.4**: Independently select advanced digital tools and resources to create, revise, and publish complex digital artifacts or collection of artifacts.
+ **9-12.DL.5**: Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.
+ **9-12.IC.7**: Investigate the use of computer science in multiple fields.
+ **7-8.CT.4**: Write a program using functions or procedures whose names or other documentation convey their purpose within the larger task.
+ **9-12.CT.4**: Implement a program using a combination of student-defined and third-party functions to organize the computation.
+ **9-12.CT.9**: Systematically test and refine programs using a range of test cases, based on anticipating common errors and user behavior.

---

## Tools Used
**p5.js Editor:** This is a code editor that allows students to use the p5.js library. We plan to use this as the primary code writing platform for students because it is easy to use and allows students to see the results of their code instantaneously.

**p5.js reference/documentation page:** This is a webpage that allows p5.js users to read all of the built-in functions. We will have students use this as their primary reference point for writing code and exploring new functions. We plan to use this because it teaches students to use their resources before asking others (especially the teacher) for help.

**Adobe Color Picker:** This tool allows users to play around with different sliders to get the exact shade of any color they desire. We plan to use this for projects that involve choosing unique colors and to teach students about the RGB values.

**Laptops for students:** We want each student to have their own designated laptop so they feel like they are a part of the CS class and that the school has invested in their abilities. It is important for each and every student to feel like they are and can be a computer scientist.

**SmartBoard:** In order to present our slides and do live code-along demos, we will need a SmartBoard or other screen that connects to the teacher laptop.

**Google Slides:** We plan to use Google Slides to explain the artwork and styles of each artist and to model starter code. Most lessons will feature direct instruction using Google Slides before launching students into their work in p5.js.

**Google Form for assessments:** We plan to give students summative (and some formative) assessments using Google Forms. This is an easily accessible and gradeable tool that most students have used in the past. Because of how Google Forms autogrades, it is easy as the teacher to see common misconceptions and distractor answers.

**Google:** Students will search on the Internet for further information about the artists they study in class.

---

## Resources
+ lesson slides
+ various images of works of art (incl. in individual lesson plans)

---

## Lessons
Total length: ~2 Weeks (~11 lessons)


## Introduction to Computer Art (2 lessons)

### Lesson 00:
+ *Standard(s)*:
  + **9-12.DL.2**: Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
  + **9-12.IC.7**: Investigate the use of computer science in multiple fields.
+ *Aim*: I can create questions about digital art.
+ Gallery walk Google slide deck (we each contribute 2 images of digital art?) Video games, animated movies, gallery installations, NFTs, Google Doodles, social media
+ Question formulation (Scheffler will provide graphic organizer Google doc)

### Lesson 01:
+ *Standard(s)*:
  + **9-12.DL.5**: Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.
  + **9-12.IC.7**: Investigate the use of computer science in multiple fields.
+ *Aim*: I can log in to, save and submit work using p5.js
+ Evolution of Computer Art (video? Slide show?) Gallery walk? Group activities? Maybe add to QFT list of questions?
+ Create account on p5.js (Duplicate starter code --> Everything is commented out; then they uncomment to see what it does? --> Save work (does not auto-save)

## Mondrian-Inspired Art (2 days)

### Lesson 02:
+ *Standard(s)*:
  + **7-8.CT.7**: Design or remix a program that uses a variable to maintain the current value of a key piece of information.
  + **9-12.IC.7**: Investigate the use of computer science in multiple fields.
+ *Aim*: I can use p5.js to create art using functions and parameters
+ Learn about artist, seeing teacher demo, doing code along, homework (out of class) assignment
+ Mastery Check (example): Google Form w/questions --> Functions and Parameters

### Lesson 03:
+ *Standard(s)*:
  + **7-8.CT.4**: Write a program using functions or procedures whose names or other documentation convey their purpose within the larger task.
  + **7-8.CT.7**: Design or remix a program that uses a variable to maintain the current value of a key piece of information.
  + **9-12.IC.7**: Investigate the use of computer science in multiple fields.
+ *Aim*: I can use p5.js to create art using functions and parameters
+ Independent lab
+ Incl. graphic organizer (can be embedded in code?)

## Picasso-Inspired Art (2 days):

### Lesson 04:
+ *Standard(s)*:
  + **7-8.CT.8**: Develop or remix a program that effectively combines one or more control structures for creative expression or to solve a problem.
  + **9-12.IC.7**: Investigate the use of computer science in multiple fields.
+ *Aim*: I can use p5.js to create art using variables and loops
+ Learn about artist, seeing teacher demo, doing code along
+ Mastery Check: Google Form w/questions --> Variables and Loops

### Lesson 05:
+ *Standard(s)*:
  + **7-8.CT.8**: Develop or remix a program that effectively combines one or more control structures for creative expression or to solve a problem.
  + **9-12.IC.7**: Investigate the use of computer science in multiple fields.
+ *Aim*: I can use p5.js to create art using variables and loops
+ Independent lab
+ Incl. graphic organizer (can be embedded in code?)

## Pollock-Inspired Art (2 days)

### Lesson 06:
+ *Standard(s)*:
  + **9-12.CT.9**: Systematically test and refine programs using a range of test cases, based on anticipating common errors and user behavior.
  + **9-12.IC.7**: Investigate the use of computer science in multiple fields.
+ *Aim*: I can use p5.js to create art using randomization and user input
+ Learn about artist, seeing teacher demo, doing code along
+ Mastery Check: Google Form w/questions --> Randomization and User Input  

### Lesson 07:
+ *Standard(s)*:
  + **9-12.CT.9**: Systematically test and refine programs using a range of test cases, based on anticipating common errors and user behavior.
  + **9-12.IC.7**: Investigate the use of computer science in multiple fields.
+ *Aim*: I can use p5.js to create art using randomization and user input
+ Independent lab
+ Mastery Check: Google Form w/questions --> Randomization and User Input

## Final Project (3 days):

### Lesson 08:
+ *Standard(s)*:
  + **9-12.DL.4**: Independently select advanced digital tools and resources to create, revise, and publish complex digital artifacts or collection of artifacts.
+ *Aim*: I can propose the design of my final project
+ Brainstorming / Proposals
+ Proposal doc turn in + drawing

### Lesson 09:
+ *Standard(s)*:
  + **9-12.CT.4**: Implement a program using a combination of student-defined and third-party functions to organize the computation.
+ *Aim*: I can set and accomplish a goal related to my final project
+ Worktime (set individual goals at start of class)

### Lesson 10:
+ *Standard(s)*:
  + **9-12.CT.9**: Systematically test and refine programs using a range of test cases, based on anticipating common errors and user behavior.
+ *Aim*: I can revise my final project based on user input
+ Peer Feedback / Gallery Walk

---

## Assessments

### Formative:
+ Mastery Check (x3) (MC/Short Response)
+ Independent Labs (x3)

### Summative:
+ Final Project:Create a work of art using p5.js; meet certain requirements (see task sheet)
---
