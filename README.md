# TriviaGame

Initially had seperate arrays for questions, answers and choices. Ran into trouble when attempting to iterate through them and their corresponding answers. Rather than spend longer trying to make that work, switched each question to be its own obj that has choices and an answer index.

Made a function resolveChoice() to accept a userinput argument and determine whether or not it was correct or not.  Having this resolve inside the newgame function made the user input static after the second choice, and would loop without choosing a new answer for every question.