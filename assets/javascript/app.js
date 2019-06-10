// $(document).ready(function () {
var numberCorrect = 0;
var numberIncorrect = 0;
//start on question 1 (index 0) in qAndA array
var currentQuestion = 0;
var questionAnswered;

var qAndA = [
    {
        question: "Which Star Trek captain has an artificial heart?",
        choice: ["James T. Kirk", "Jean-Luc Picard", "Kathryn Janeway", "Benjamin Sisko"],
        answer: 1
    },
    {
        question: "What character owns a bar on Deep Space Nine?",
        choice: ["Odo", "Worf", "Quark", "Data"],
        answer: 2
    },
    {
        question: "What is Data's brother's name?",
        choice: ["Lore", "Lore", "Borg", "Doran", "Phillip"],
        answer: 0
    },
    {
        question: "Which Star Trek captain loves baseball?",
        choice: ["James T. Kirk", "Jean-Luc Picard", "Kathryn Janeway", "Benjamin Sisko"],
        answer: 3
    }
]

function newGame() {
    numberCorrect = 0;
    numberIncorrect = 0;
    // remainingQuestions = 10;
    currentQuestion = 1;

    //div containing game
    $("#game").show();

    //result of last question answered
    $("#stats").text("");

    //remove intro
    // $("#start-button").hide();





}

function resolveChoice(userInput, y) {
    var questionDisplayed = qAndA[y];
    if (userInput === questionDisplayed.choice[questionDisplayed.answer]) {
        console.log("correct answer");
        numberCorrect++;
        currentQuestion++;
        return true;
    } else {
        console.log("incorrect answer");
        numberIncorrect++;
        currentQuestion++;
        return false;
    }

}

function acceptInput() {


}

function newQuestion(x) {
    console.log(x);
    $("#correct-answers").text("Correct Answers: "+numberCorrect);
    $("#incorrect-answers").text("Wrong Answers: "+numberIncorrect);
    var questionDisplayed = qAndA[x];
    //display question and answer choices from specified qandA set
    $("#question").text(questionDisplayed.question);
    $("#answer1").text(questionDisplayed.choice[0]);;
    $("#answer2").text(questionDisplayed.choice[1]);;
    $("#answer3").text(questionDisplayed.choice[2]);;
    $("#answer4").text(questionDisplayed.choice[3]);;


}

$(".aButton").on("click", function () {
    var userAnswer = $(this).text();
    console.log(userAnswer);
    resolveChoice(userAnswer, currentQuestion);
    newQuestion(currentQuestion);
});


newQuestion(currentQuestion);



4