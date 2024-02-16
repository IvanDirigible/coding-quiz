var returnEl = document.querySelector(".back-btn");
var beginEl = document.querySelector(".begin-btn");
var frontPage = document.querySelector(".title-page");
var timerEl = document.querySelector(".timer-count");
var quizPage = document.querySelector(".container");
var questionEl = document.querySelector("#quest-text");
var choiceEl = document.querySelectorAll(".multi-choice");
// var answerEl = document.querySelector(".answer-text");
// var feedbackEl = document.querySelector(".answerShow");
var feedbackEl = document.querySelector("#right-wrong", ".answerShow");
var testEl = document.querySelector(".testBtn");
var currentQuizQ = document.querySelector("#quest-text", "#choiceOne", "#choiceTwo", "#choiceThree", "#choiceFour");
var currentQEl = 0;
var timer;

var timerCount = 76;
// var answerChoices = document.querySelector(".choice");
// var answerChoices = document.querySelectorAll("input[id]");
// var score = 0;
var quizQuestions = [
    ["Commonly used data types DO NOT include _______.", "1. strings", "2. booleans", "3. alerts", "4. numbers","3. alerts"],
    ["The condition in an if / else statement is enclosed within _______.", "1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets", "3. parentheses"],
    ["Arrays in Javascript can be used to store ______.", "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above", "4. all of the above"],
    ["String values must be enclosed within ______ when being assigned to variables.", "1. commas", "2. curly brackets", "3. quotes", "4. parantheses", "3. quotes"],
    ["A very useful tool during development and debugging for printing content to the debugger is ______", "1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log", "4. console.log"]
]
// var answer1 = document.querySelector("#1-choice");
// var answer1 = document.querySelector("#choiceOne");

function beginQuiz() {
    frontPage.setAttribute("style", "display: none;");
    quizPage.setAttribute("style", "display: flex;");
    console.log("75 seconds on the clock!");
    startTimer();
}

function titleReturn() {
    window.location.href="index.html"
};

if (beginEl) {
    beginEl.addEventListener("click", beginQuiz);
    // beginEl.addEventListener("click", nextQuestion);
    // nextQuestion();
    }

if (returnEl){
    returnEl.addEventListener("click", titleReturn);
}



// function nextQuestion() {
//     currentQuizQ = quizQuestions[2][0,1,2,3,4];
//     console.log(currentQuizQ)
//     console.log(currentQuizQ[currentQEl])
//     console.log(currentQuizQ[0][0])
// }



// console.log(quizQuestions);
// console.log(quizQuestions[0]);
// console.log(quizQuestions[0][0]);
// console.log(currentQuizQ);
// console.log(answerChoices);



function quizGenerate() {
    var userChoice = EventTarget.textContent;
    var answer = quizQuestions[currentQEl][5];
    console.dir(userChoice);
    console.log(quizQuestions[currentQEl][5])
    currentQEl++;
    var Q1 = document.getElementById("choiceOne");
    var Q2 = document.getElementById("choiceTwo");
    var Q3 = document.getElementById("choiceThree");
    var Q4 = document.getElementById("choiceFour");
    questionEl.textContent = quizQuestions[currentQEl][0];
    Q1.textContent = quizQuestions[currentQEl][1];
    Q2.textContent = quizQuestions[currentQEl][2];
    Q3.textContent = quizQuestions[currentQEl][3];
    Q4.textContent = quizQuestions[currentQEl][4];
    // if (userChoice.textContent === answer) {
    //     feedbackEl.textContent = "Correct!"
    //     thread.Sleep(2000);
    //     feedbackEl.textContent = "";
    // }
    // else {
    //     feedbackEl.textContent = "Incorrect!"
    //     thread.Sleep(2000);
    //     feedbackEl.textContent = "";
    //     timerCount-10;
    // }
    // var answer = quizQuestions[currentQEl][5];
    
}


// if (answerChoices){
// answerChoices.addEventListener("click", quizGenerate);
// }

if (choiceEl){
choiceEl.addEventListener("click", resultResolve);
}
function resultResolve() {
    console.log("You're clicking an option.")
    if (userChoice.textContent === answer) {
        feedbackEl.textContent = "Correct!"
        thread.Sleep(2000);
        feedbackEl.textContent = "";
    }
    else {
        feedbackEl.textContent = "Incorrect!"
        thread.Sleep(2000);
        feedbackEl.textContent = "";
        timerCount-10;
    }
    console.log("This is resolved.")
}

if (testEl){
    testEl.addEventListener("click", testClick);
}

function testClick() {
    // feedbackEl.setAttribute("style", "display: flex;")
    console.log("Testing...")
    feedbackEl.textContent = "Correct!"
    console.log("Pre sleep.")
    // Thread.sleep(1000)
    console.log("Post sleep.")
    feedbackEl.setAttribute("style", "display: none;")
    feedbackEl.textContent = ""
    console.log("Post clear.")
}

function answerClick() {
    console.log("Is this doing anything?");
    // currentQuizQ.textContent = "";
    // currentQuizQ.textContent = quizQuestions[0];
    quizGenerate();
    // console.log(answer1);
    // console.log(currentQuizQ);
    // console.log(answerChoices);
    // console.log(Array.from(answerChoices));
};

// function 

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }