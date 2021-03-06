var h1El = document.querySelector("#h1");
var h2El = document.querySelector("#h2");
var pEl = document.querySelector("#p");
var timerEl = document.querySelector("#timer");
var RankEl = document.querySelector("#highScorePage");
var startBtn = document.createElement("Button");
var btn1 = document.createElement("Button");
var btn2 = document.createElement("Button");
var btn3 = document.createElement("Button");
var btn4 = document.createElement("Button");
var btnDiv = document.querySelector("#myDiv");
var form = document.createElement("Form");

var score = 0;
var questionCounter = 0;

//Creating questions for the quiz
var triviaArr = [
    {
        question: "How many lanes does an olympic standard swimming pool have?",
        answers: ["5", "6", "7", "8"],
        correctAnswer: "8"

    },
    {
        question: "What city is the capital of China?",
        answers: ["Hong Kong", "Beijing", "Pyeong Yang", "Tokyo"],
        correctAnswer: "Beijing"
    },
    {
        question: "What is Santa's name in France?",
        answers: ["Homme Araignée", "Pere Noel", "Omelette du Fromage", "Croissant"],
        correctAnswer: "Pere Noel"
    }
]

// Click event to start quiz

function quizInit() {
    //document.getElementById("h1").innerHTML = "Coding Quiz Challenge!"
    h1El.innerHTML = "Coding Quiz Challenge!"
    h1El.style.textAlign = "center";
    h2El.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score by ten seconds!";
    h2El.style.textAlign = "center";
    startBtn.innerHTML = "Let's Start!";
    startDiv.appendChild(startBtn);
    startQuiz();
};

quizInit();

function startQuiz() {
    startBtn.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Started");
        quizPage();
    });
}


//Quiz Pages
//var quizPage = document.querySelector("#");

btnDiv.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    if (event.target.textContent == triviaArr[questionCounter - 1].correctAnswer) {
        console.log("Correct!");
        score += 10;
        console.log(score);
    } else {
        console.log("Incorrect...")
        score -= 10;
        console.log(score);
    }
    quizPage();
});

function quizPage() {
    startBtn.style.display = "none";

    if (questionCounter < 3) {
        h2El.innerText = triviaArr[questionCounter].question;

        btn1.innerHTML = triviaArr[questionCounter].answers[0];
        myDiv.appendChild(btn1);

        btn2.innerHTML = triviaArr[questionCounter].answers[1];
        myDiv.appendChild(btn2);

        btn3.innerHTML = triviaArr[questionCounter].answers[2];
        myDiv.appendChild(btn3);

        btn4.innerHTML = triviaArr[questionCounter].answers[3];
        myDiv.appendChild(btn4);

        questionCounter++;
    } else {
        finalScore();
    }

}

//Final Score Page
function finalScore() {
    myDiv.style.display = "none";

    h1El.innerHTML = "Quiz Complete!"
    h1El.style.textAlign = "center";
    h2El.innerHTML = "Your final score is " + score + " !";
    h2El.style.textAlign = "center";

    myDiv.appendChild(form);
}

//High Score Page
//var highScorePage = document.querySelector("highScorePage");

//Create array for the different pages that will appear throughout quiz
//var allPage = [introPage, quizPage, scorePage, highscorePage];

// Define start conditions (I want to include score keeping for correct & incorrect answers, but how??)

//Use 'setInterval()' to create countdown for quiz. Timer will restart when question answered, unanswered or out of time.

function countdown() {
    var timeLeft = 3;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}


