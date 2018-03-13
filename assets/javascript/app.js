
//make object of objects
var triviaGame = {
    question: "What is the only animal that can fly backwards?",
    choices: ["a. Woodpecker", "b. Hummingbird", "c. Bat", "d. Hawk"],
    answer: "b. Hummingbird",

    question:"What living bird has the largest wing span?",
    choices: ["a. Wandering Albatross", "b. California Condor", "c. Golden Eagel", "d. Great White Pelican"],
    answer: "a. Wandering Albatross",


    question:"What does a panda's primary diet consist of?",
    choices: ["a. Mushrooms", "b. Acorns", "c. Bamboo", "d. Fruit"],
    answer: "c. Bamboo",


    question:"What is the term for the fear of dogs?",
    choices: ["a. Xenophobia", "b. Philophobia", "c. Cynophobia", "d. Coulrophobia"],
    answer: "c. Cynophobia",

    
    question:"What is the proper term for a group of parrots?",
    choices: ["a. Pandemonium", "b. Hullabaloo", "c. Rukus", "d. Brouhaha"],
    answer: "a. Pandemonium",
};

$("#start").click(displayQuestion);
function displayQuestion (){
     for (var i = 0; i < triviaGame.length; i++){
        $("#randomQuestion").text(triviaGame.question);
}

$("#start").click(displayAnswers)
function displayAnswers (){
    $("#answer1").text(triviaGame.choices[0]);
    $("#answer2").text(triviaGame.choices[1]);
    $("#answer3").text(triviaGame.choices[2]);
    $("#answer4").text(triviaGame.choices[3]);   
}

// var wins = 0;
// var losses = 0;
// $("#ans").on("click", userChooses)
// function userChoice (){
//     if (userChooses === triviaGame.answer){
//        wins ++;
//        $("#randomQuestion").text("Good Job!")
//        displayQuestion();
//        displayAnswers();
//   } else if (userChooses !== triviaGame.answer){
//        losses ++;
//        displayQuestion();
//        displayAnswers();
//    }