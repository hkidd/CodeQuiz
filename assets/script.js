// HTML reference variables
// General variables
var quizContainer = document.querySelector('#quiz');
var startButton = document.querySelector('#startBtn');
var timeRemaining = document.querySelector('#timeLeft');

// High score retrieval variables
var highScoreContainer = document.querySelector('#highScores');
var getHighScoreBtn = document.querySelector('#highScoresBtn');
var highScoreOrderedList = document.querySelector('#highScoreList');

// Question and answer variables
var questionText = document.querySelector('#question');
var answerTextA = document.querySelector('#answer1');
var answerTextB = document.querySelector('#answer2');
var answerTextC = document.querySelector('#answer3');
var answerTextD = document.querySelector('#answer4');

// Results and score related variables
var resultsContainer = document.querySelector('#results');
var totalCorrect = document.querySelector('#totalCorrect');
var totalIncorrect = document.querySelector('#totalIncorrect');
var percentCorrect = document.querySelector('#percentCorrect');
var finalScore = document.querySelector('#finalScore');
var saveResultsForm = document.querySelector('#form');
var saveResultsBtn = document.querySelector('#saveResultsBtn');
var saveHighScoreBtn = document.querySelector('#saveHighScore');

// Global time and score variables
var timerText = document.querySelector('#timer');
var timeLeft = 25;
var timeInterval; // global to be accessed by multiple functions
var correctAnswers = 0;
var wrongAnswers = 0;
var totalScore = 0;


// Array of all questions and answers.  From here, the individual properties can be accessed.
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


// FUNCTIONS RELATED TO STARTING QUIZ AND TIMER COUNTDOWN

// Clicking the start button starts the quiz
startButton.addEventListener("click", startQuiz);

// Resets everything upon page load and after restarting quiz.  Everything is hidden but start button.
function init() {
    startButton.style.display = "block";
    timeRemaining.style.display = "none";
    timerText.style.display = "none";
    quizContainer.style.display = "none";
    resultsContainer.style.display = "none";
    saveResultsForm.style.display = "none";
    timeLeft = 25;
    shuffle(questions);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    totalScore = 0;
}

// Starts other functions that begin the quiz
function startQuiz(event) {
    // Prevent default button click behavior
    event.preventDefault();

    // Calls the function to start the timer
    countdown();
    timerText.style.display = "inline-block";
    timeRemaining.style.display = "inline-block";

    // Calls the function to shuffle the questions
    shuffle(questions);

    // Calls the function to show the first question and hides start button
    startButton.style.display = "none";
    showQuestion();
    quizContainer.style.display = "block";
}

// Function that starts the timer and decrements every second.  If timeLeft hits 0, the interval is cleared and showResults is called.
function countdown() {
    timeInterval = setInterval(function () {
        timeLeft--;
        timeRemaining.textContent = timeLeft + ' sec remaining';
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            showResults();
            return;
        }
    }, 1000);
}


// FUNCTIONS RELATED TO SHUFFLING QUESTION ARRAY AND DISPLAYING CURRENT QUESTION AND ANSWERS

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

// Function that shows the current question with answers in the quiz container
function showQuestion() {
    // The currentQuestionIndex should be shuffled each time the quiz is started, thus starting with a different question each time. 
    var currentQ = questions[currentQuestionIndex];

    // Sets the inner HTML of each container to the current question and answers
    question.textContent = currentQ.question;
    answerTextA.textContent = currentQ.answerA;
    answerTextB.textContent = currentQ.answerB;
    answerTextC.textContent = currentQ.answerC;
    answerTextD.textContent = currentQ.answerD;
}

// Function to check if answer is correct, called by onclick in html 
function checkAnswer(answer) {
    if(answer == questions[currentQuestionIndex].correct) {
        correctAnswers++;
    } else {
        wrongAnswers++;
        wrongAns();
    }

    // On answer click, the questionIndex will be incremented if there are still questions remaining
    if (currentQuestionIndex < lastQuestionIndex) {
        currentQuestionIndex++;
        showQuestion();
    // if no questions remain, the timer is  and the results container is shown
    } else {
        clearInterval(timeInterval);
        showResults();
    }
}

// Timer decreases by 5 seconds for every wrong answer
function wrongAns() {
    timeLeft = timeLeft - 5; 
}


// FUNCTIONS RELATED TO SCORE CALCULATION AND SAVING HIGH SCORES

// Initialize final score value and function to calculate score
var score;
function calculateScore() {
    score = (100 * (correctAnswers/questions.length));
}

// Function that will show the results at the end
function showResults() {
    calculateScore();

    // When showResults is called, the quiz and timer containers are hidden to only show the results
    resultsContainer.style.display = "block";
    quizContainer.style.display = "none";
    timerText.style.display = "none";

    // Show total correct and incorrect answers, as well as total score
    totalCorrect.innerHTML = "Correct: " + correctAnswers;
    totalIncorrect.innerHTML = "Incorrect: " + wrongAnswers;
    percentCorrect.innerHTML = "Score: " + score;
}

// Event listener for clicking the save results button
saveResultsBtn.addEventListener("click", saveResults);

// Function that displays the final save results form
function saveResults() {
    calculateScore();
    saveResultsForm.style.display = "block";
    finalScore.innerHTML = "Score = " + score;
    resultsContainer.style.display = "none";
}

// Event listener for clicking the save high score button
saveHighScoreBtn.addEventListener("click", saveHighScore);

// An empty array is created to hold the user scores, with a max amount of scores also set
var userScores = [];
var maxScores = 3;

function saveHighScore() {
    calculateScore();

    // Variable initialized to store the users initials and high score for record keeping
    var userInfo = { 
        initials: initials.value.trim(),
        highScore: score,
      }

    // The user intials and score are pushed into the userScores array, which will hold the top 3 scores in local storage.  These are also sorted from high to low and splice removes everything after the 3rd element.
      userScores.push(userInfo);
      userScores.sort((a,b) => b.highScore - a.highScore);
      userScores.splice(maxScores);
      console.log(userScores);

    localStorage.setItem("userScores", JSON.stringify(userScores));

    // After clicking the save score button, the user is prompted to play again
    var playAgain = confirm("Would you like to try again?");
    if (playAgain)
        init();
        else return;
}

// Event listener to retrieve high scores from local storage
getHighScoreBtn.addEventListener("click", mapHighScores);

function mapHighScores() {
    // Get stored score values from client storage each time this function is called, if they exist, and save to a golbal variable or empty array
    var storedScores = JSON.parse(localStorage.getItem("userScores")) || [];

    // In order to return a list of the high scores, the initials and highScore values are mapped to a list that then replaces the innerHTML of the highScoreOrderedList element (and joined together as a string).
    highScoreOrderedList.innerHTML = storedScores
        .map(score => {
        return `<li>${score.initials}: ${score.highScore}</li>`;
        }).join("");

    var state = highScoreOrderedList.getAttribute("data-state");

    if (state === "hidden") {
        // If the button is clicked while the state is "hidden", the high scores list becomes visible
        highScoreOrderedList.style.display = "block";
        highScoreOrderedList.dataset.state = "visible";

      } else {
        // 'Hide' the high scores by setting the display style to none
        highScoreOrderedList.style.display = "none";
        // Use .setAttribute() method to change back to hidden
        highScoreOrderedList.setAttribute("data-state", "hidden")
      }
}

// The init function sets the website/quiz to it's inital state on page load
init();