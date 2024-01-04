var returnEl = document.querySelector(".back-btn");
var beginEl = document.querySelector(".begin-btn");
var frontPage = document.querySelector(".title-page");
var quizPage = document.querySelector(".container");
var questionEl = document.querySelector("#quest-text");
var choiceEl = document.querySelector(".multi-choice");
var answerEl = document.querySelector(".answer-text");
var qAndA = document.querySelector["#quest-text", "#1-choice", "#2-choice", "#3-choice", "#4-choice"];
var currentQEl = 0;
var answerChoices = document.querySelectorAll[".choice"];
var score = 0;


function beginQuiz() {
    frontPage.setAttribute("style", "display: none;");
    quizPage.setAttribute("style", "display: flex;");
}

function titleReturn() {
    window.location.href="index.html"
};

if (beginEl) {
    beginEl.addEventListener("click", beginQuiz);
    // beginEl.addEventListener("click", nextQuestion);
    nextQuestion();
    }

if (returnEl){
    returnEl.addEventListener("click", titleReturn);
}

//Questions Page features
var quizQuestions = [
    {question: "Commonly used data types DO NOT include _______.",
    choice: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"},

    {question: "The condition in an if / else statement is enclosed within _______.",
    choice: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"},

    {question: "Arrays in Javascript can be used to store ______.",
    choice: ["numbers and strings", "other arrays", "booleans", "all of ther above"],
    answer: "all of the above"},

    {question: "String values must be enclosed within ______ when being assigned to variables.",
    choice: ["commas", "curly brackets", "quotes", "parantheses"],
    answer: "quotes"},

    {question: "A very useful tool during development and debugging for printing content to the debugger is ______",
    choice: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"}
]

function nextQuestion() {
    // questionEl.textContent = "";
    // answerChoices.textContent = "";
    // qAndA.textContent = ["", "", "", "", ""];
    console.log(answerChoices);
    // for (var k = 0; k < quizQuestions.length; k++) {
    for (var k = 0; k < 5; k++) {
        // var currentQAndA = quizQuestions[currentQEl];
        // qAndA[0] = quizQuestions[currentQEl].questionEl
        questionEl = quizQuestions[currentQEl].question
        answerChoices = quizQuestions[currentQEl].choice
        // var currentQuestion = quizQuestions[currentQEl].questionEl;
        // var currentOptions = quizQuestions[currentQEl].choiceEl;
        // questionEl.textContent = currentQuestion;
        qAndA.textContent = currentQAndA;
    }
    qAndA.addEventListener("click", (answerCheck));
}

function answerCheck(event) {
    // var checker = event.target;
    if (quizQuestions.answer == event.target) {
        console.log("Correct!")
        // if quizPage.textContent == quizPage[currentQ]
    }
    else {
        console.log("Wrong!")
        score++
    }
    // console.log(currentQAndA)
    currentQEl++
}

// if (answerChoices) {
//     console.log(answerChoices);
//     answerChoices.addEventListener("click", nextQuestion);
// }

// console.log(answerChoices);
console.log(quizQuestions);
console.log(quizQuestions[0]);
console.log(quizQuestions[currentQEl].choice);
