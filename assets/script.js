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
//          4.  Append list of answers to the question location inside body
//          5.  The random question selected will take the place replace the textContent of 


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
var highScores = document.querySelector('#highScores');
var questionText = document.querySelector('#question');
var answerTextA = document.querySelector('#answer1');
var answerTextB = document.querySelector('#answer2');
var answerTextC = document.querySelector('#answer3');
var answerTextAD = document.querySelector('#answer4');
var correctCount = document.querySelector('#correctAnswerCount');
var resultsContainer = document.querySelector('#results');

// Global variables
var timeLeft = 30;
var correctAnswers = 0;
var wrongAnswers = 0;
var totalScore = 0;

var questionIndex = 0;

// Array of all questions.  From here, the individual properties can be accessed.
var questions = [
    {
        question: "What is the name of the F1 track in Austin?", answerA: "America's Track", 
        answerB: "Austin Raceway", 
        answerC: "Circuit of the America's", 
        answerD: "Texas Motor Speedway",
        answer: "C"
    }, {
        question: "As of 2021, how many driver's championsips has Lewis Hamilton won?",
        answerA: "4", 
        answerB: "7", 
        answerC: "10", 
        answerD: "2",
        answer: "7"
    }, 
    {
        question: "Alpha Tauri is the new name of what previous team?",
        answerA: "Renault", 
        answerB: "Jordan", 
        answerC: "Porsche", 
        answerD: "Torro Rosso",
        answer: "D"
    }, 
    {
        question: "The current (2021) Formula 1 cars all use what size V6 engine (in liters)?",
        answerA: "1.6", 
        answerB: "2.4", 
        answerC: "3.0", 
        answerD: "3.5",
        answer: "A"
    }];

startButton.addEventListener("click", startQuiz);


// Shuffle question array each time startQuiz is called
function shuffle(questions) {
    // Fisher-Yates sorting method.  Starting at the end, iterate backwards through the questions array and swap one value with another from a random position in the array.  This loops through the entire array, decrementing, while the index is above 0.
    for (var i = questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
    return questions;
};


// Starts other functions that begin the quiz
function startQuiz() {

    shuffle(questions);

}

// Function that starts the timer
function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timeRemaining.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}


// Function that shows the current question
function showQuestion() {
    // The questionIndex should be shuffled each time the quiz is started. 
    var currentQ = questions[questionIndex];

    // Sets the inner HTML of each container to the current question and answers
    question.innerHTML = currentQ.question;
    answer1.innerHTML = currentQ.answerA;
    answer2.innerHTML = currentQ.answerB;
    answer3.innerHTML = currentQ.answerC;
    answer4.innerHTML = currentQ.answerD;



}



// Function that gets next question
// On answer click, the questionIndex will be incremented



function correctAns(){

}

function wrongAns(){
    
}



// Function that will show the results at the end
function showResults() {

}
