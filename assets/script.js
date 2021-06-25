// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
//          1.  Start button begins game
//          2.  Timer starts counting down
//          3.  First question is presented with answer choices


// WHEN I answer a question
// THEN I am presented with another question
//          1.  Need an array of questions and answers (array of objects?)
//          2.  After clicking answer button, switch to another question/answer set
//          3.  Questions will be randomly picked from the array and presented


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
//          1.  If answer is incorrect, subtract time from the timer (decrement)


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
//          1.  If all questions are answered or time = 0, terminate function
//          2.  Display Game Over message?


// WHEN the game is over
// THEN I can save my initials and my score
//          1.  When game ends, prompt or new form is presented to save user initials and score

// HTML references
var quizContainer = document.querySelector('#quiz');
var startButton = document.querySelector('#startBtn');
var timeRemaining = document.querySelector('#timeLeft');

var time = 30;

var questions = [];

startButton.addEventListener("click", startQuiz());


// Starts other functions that begin the quiz
function startQuiz() {

}

// Function that starts the timer




