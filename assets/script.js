// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
//          1.  Start button begins game
//          2.  Timer starts counting down
//          3.  First question is presented with answer choices


// WHEN I answer a question
// THEN I am presented with another question
//          1.  Need an array of questions and answers (array of objects?)
//          2.  After clicking answer button, switch to another question/answer set (increment question index)
//          3.  Questions will be randomly picked from the array and presented (questions are randomized when startQuiz is called)
//          4.  Append list of answers to the question location inside body (innerHTML will be used to show the questions and answers)
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
var answerTextD = document.querySelector('#answer4');
var correctCount = document.querySelector('#correctAnswerCount');
var resultsContainer = document.querySelector('#results');
var totalCorrect = document.querySelector('#totalCorrect');
var totalIncorrect = document.querySelector('#totalIncorrect');

// Global variables
var timeLeft = 30;
var correctAnswers = 0;
var wrongAnswers = 0;
var totalScore = 0;

// Array of all questions.  From here, the individual properties can be accessed.
var questions = [
    {
        question: "What is the name of the F1 track in Austin?", 
        answerA: "America's Track", 
        answerB: "Austin Raceway", 
        answerC: "Circuit of the America's", 
        answerD: "Texas Motor Speedway",
        correct: "C"
    }, {
        question: "As of 2021, how many driver's championsips has Lewis Hamilton won?",
        answerA: "4", 
        answerB: "7", 
        answerC: "10", 
        answerD: "2",
        correct: "B"
    }, 
    {
        question: "Alpha Tauri is the new name of what previous team?",
        answerA: "Renault", 
        answerB: "Jordan", 
        answerC: "Porsche", 
        answerD: "Torro Rosso",
        correct: "D"
    }, 
    {
        question: "The current (2021) Formula 1 cars all use what size V6 engine (in liters)?",
        answerA: "1.6", 
        answerB: "2.4", 
        answerC: "3.0", 
        answerD: "3.5",
        correct: "A"
    }];

// Variables to help with question sorting
var currentQuestionIndex = 0;
var lastQuestionIndex = (questions.length - 1);    


startButton.addEventListener("click", startQuiz);


// Starts other functions that begin the quiz
function startQuiz(event) {

    event.preventDefault();

    // Calls the function to start the timer
    countdown();

    // Calls the function to shuffle the questions
    shuffle(questions);

    // Calls the function to show the first question and hides start button
    startButton.style.display = "none";
    showQuestion();
    quizContainer.style.display = "block";
}

// Function that starts the timer
function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timeRemaining.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            showResults();
            return;
        }
    }, 1000);
}


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


// Function that shows the current question
function showQuestion() {
    // The questionIndex should be shuffled each time the quiz is started. 
    var currentQ = questions[currentQuestionIndex];

    // Sets the inner HTML of each container to the current question and answers
    question.innerHTML = currentQ.question;
    answerTextA.innerHTML = currentQ.answerA;
    answerTextB.innerHTML = currentQ.answerB;
    answerTextC.innerHTML = currentQ.answerC;
    answerTextD.innerHTML = currentQ.answerD;

}

// Function that gets next question
// On answer click, the questionIndex will be incremented

// Function to check if answer is correct
function checkAnswer(answer) {
    if(answer == questions[currentQuestionIndex].correct) {
        correctAnswers++;
        console.log(answer);
    } else if (answer != questions[currentQuestionIndex].correct){
        wrongAnswers++;
        wrongAns();
        console.log(answer);
    }

    // Check if there are still questions remaining
    if (currentQuestionIndex < lastQuestionIndex) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        clearInterval(timeLeft);
        showResults();
    }
}



// function correctAns() {
//     // change score text to show current number of correct answers
// }

function wrongAns(){
    // change score text to show current number of correct answers
    timeLeft = timeLeft - 5;
}



// Function that will show the results at the end
function showResults() {
    resultsContainer.style.display = "block";
    quizContainer.style.display = "none";
    // Show total correct and incorrect answers
    totalCorrect.innerHTML = "Correct: " + correctAnswers;
    totalIncorrect.innerHTML = "Incorrect: " + wrongAnswers;

    timeRemaining.textContent = '';
}


// Save results to local storage
function saveResults() {

}
