# CodeQuiz
A timed quiz on random Formula 1 facts that stores the top 3 high scores in local storage.

Link to live page: https://hkidd.github.io/CodeQuiz_HW4/

## Purpose
The purpose of this homeowrk assignment was to create a timed quiz using JavaScript fundamentals (DOM manipulation, event listeners, functions, etc.) that dynamically updates the associated HTML/CSS and saves high scores to local storage.

I chose to have mine feature random facts related to Formula 1!

## Acceptance Criteria
```
GIVEN I am taking a code quiz

WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and my score
```

## The bulk of the challenge
The main challenge for me in this assignment was to get all of the various functions working together properly, culminating in being able to save the top 3 user scores.  

## Demo
![Quiz Demo Gif](assets/images/F1quizTrimmed.gif)

## End result
After much time and effort, my Formula 1 quiz is in an entirely functional state and saves the top 3 user scores (in order) to local storage.

When a user clicks the Start Quiz button, the array of questions and answers are randomized and then presented one question at a time along with the start of the timer.  Event listeners and click events are used to check for correct answers as well as reducing the amount of time remaining with each wrong answer.  At the end of the quiz, the final score is calculated and the user can then save their initials and score to the high score list.  The user info is pushed into an array and saved to the local storage.  These scores can then be retrieved from local storage (and parsed back to an array).  Once retrieved, the user info array is then mapped to new list item elements which are joined as a string and presented upon clicking the high scores button.  Only the top 3 scores are saved, with lower scores being spliced out of the array.

If desired, more questions and answers could be added to the questions array (along with a change to the time limit) to increase the length of this quiz.  The question sorting and other functions were designed to run the same regardless of the number of questions.

## Made with the help of + references
Previous boot camp exercises (time intervals, local storage, DOM manipulation) <br>
Jessamyn McTwigan <br>
Jacob Guiro <br>

MDN Docs <br>
W3 Schools <br>
Web Dev Simplified (YT) <br>
Code Explained <br>
James Quick (YT) <br>

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contact
Harrison Kidd <br>

harrisonakidd@gmail.com 
