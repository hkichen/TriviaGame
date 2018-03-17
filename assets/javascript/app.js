
//array of objects
var gameQuestions = [
    {
        question: "What is the only animal that can fly backwards?",
        choices: ["a. Woodpecker", "b. Hummingbird", "c. Bat", "d. Hawk"],
        answer: "b. Hummingbird"
    }, {
        question:"What living bird has the largest wing span?",
        choices: ["a. Wandering Albatross", "b. California Condor", "c. Golden Eagel", "d. Great White Pelican"],
        answer: "a. Wandering Albatross"
    }, {
        question:"What does a panda's primary diet consist of?",
        choices: ["a. Mushrooms", "b. Acorns", "c. Bamboo", "d. Fruit"],
        answer: "c. Bamboo"
    }, {  
        question:"What is the term for the fear of dogs?",
        choices: ["a. Xenophobia", "b. Philophobia", "c. Cynophobia", "d. Coulrophobia"],
        answer: "c. Cynophobia"
    }, {
        question:"What is the proper term for a group of parrots?",
        choices: ["a. Pandemonium", "b. Hullabaloo", "c. Rukus", "d. Brouhaha"],
        answer: "a. Pandemonium"
    }
];

var questionIndex = 0;

$("#reset").click(function() {
    questionIndex = 0;
    wrong = 0;
    correct = 0;
    displayQuestion();
});

//game starts when user clicks on start button
$("#start").click(displayQuestion);
var intervalId = -1;

//function to display question and time interval, and whars happens when user runs out of time
function displayQuestion() {
    hideAll();
    $("#playContainer").show();
    clearInterval(intervalId);
    var currentQuestion = gameQuestions[questionIndex]
    $("#randomQuestion").html(currentQuestion.question);
    $("#answer1").html(currentQuestion.choices[0]);
    $("#answer2").html(currentQuestion.choices[1]);
    $("#answer3").html(currentQuestion.choices[2]);
    $("#answer4").html(currentQuestion.choices[3]);
    var timeLeft = 9;
    $("#time").text(10)
    intervalId = setInterval(function() { 
        if (timeLeft >= 0) {
            $("#time").text(timeLeft);
            timeLeft = timeLeft - 1;
            if (questionIndex >= gameQuestions.length) {
                displayEndGame(); 
                clearInterval(intervalId);
            }
        } else {
            wrong++;
            questionIndex++;
            clearInterval(intervalId);
            displayFeedback("Out of Time! The Correct answer was: " + currentQuestion.answer);
            setTimeout(function() {
                if (questionIndex >= gameQuestions.length) {
                    displayEndGame();
                } else {
                    displayQuestion();
                } 
            }, 3000);  
        }
    }, 3000);
}

//set of functions that control what containers are displayed
function hideAll() {
    $("#startContainer").hide();
    $("#playContainer").hide();
    $("#feedbackContainer").hide();
    $("#endGameContainer").hide();
}

function displayFeedback(feedback) {
    hideAll();
    $("#feedback").text(feedback);
    $("#feedbackContainer").show();
}

function displayEndGame() {
    hideAll();
    $("#endGameContainer").show();
    $("#correct").text("Number of Right: " + correct);
    $("#wrongs").text("Number of Wrong: " + wrong);
}

var wrong = 0;
var correct = 0;
//function to for user interaction
$(".ans").click( function(event) {
    var userAnswer = event.currentTarget.innerText;
    if (gameQuestions[questionIndex].answer === userAnswer) {
        correct++;
        displayFeedback("Correct!");
        
    } else {
        wrong++;
        displayFeedback("The correct answer was " + gameQuestions[questionIndex].answer);
    }
    questionIndex++;
    if (questionIndex < gameQuestions.length) {
        setTimeout(function() {
            displayQuestion();
        }, 3000);
    } else {
        setTimeout(function(){
          displayEndGame();  
        }, 3000)
    }
});