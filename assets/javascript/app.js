// $(document).ready(function () {
//how many questions you got correct
var numberCorrect = 0;
//how many you did not get correct
var numberIncorrect = 0;
//start on question 1 (index 0) in qAndA array
var currentQuestion = 0;
//once hits 10 game is over
var questionAnswered;

var timeUp = 0;

//takes on a setInterval to be used in a clearInterval
var timey;

//array of question objs

var qAndA = [
    {   //question that will appear
        question: "Which Star Trek captain has an artificial heart?",
        //multiple choices
        choice: ["James T. Kirk", "Jean-Luc Picard", "Kathryn Janeway", "Benjamin Sisko"],
        //answer key by index 
        answer: 1
    },
    {
        question: "What character owns a bar on Deep Space Nine?",
        choice: ["Odo", "Worf", "Quark", "Data"],
        answer: 2
    },
    {
        question: "What is Data's brother's name?",
        choice: ["Lore", "Borg", "Doran", "Phillip"],
        answer: 0
    },
    {
        question: "Which Star Trek captain loves baseball?",
        choice: ["James T. Kirk", "Jean-Luc Picard", "Kathryn Janeway", "Benjamin Sisko"],
        answer: 3
    },
    {
        question: "Which Star Trek series has a female chief Engineer?",
        choice: ["Enterprise", "The Next Generation", "Voyager", "Deep Space Nine"],
        answer: 2
    },
    {
        question: "Which character serves as the head of security for the space station Deep Space Nine?",
        choice: ["Kira Nerys", "Worf", "Odo", "Jordy"],
        answer: 2
    },
    {
        question: "Which hostile race coined the phrase 'Resistance is futile.'?",
        choice: ["Borg", "Klingons", "Cardassians", "Romulans"],
        answer: 0
    },
    {
        question: "What is Sulu's primary position on the U.S.S. Enterprise?",
        choice: ["Navigator", "Chief Engineer", "Helmsman", "Science Officer"],
        answer: 1
    },
    {
        question: "Which species was the first to discover warp drive?",
        choice: ["Klingons", "Humans", "Borg", "Vulcans"],
        answer: 3
    },
    {
        question: "Which actor originally devised the Klingon language?",
        choice: ["Leonard Nimoy", "James Doohan", "Michael Ansara", "Mark Lenard"],
        answer: 1
    }

]

// function newGame() {
//     numberCorrect = 0;
//     numberIncorrect = 0;
//     // remainingQuestions = 10;
//     currentQuestion = 1;

//     //div containing game
//     $("#game").show();

//     //result of last question answered
//     $("#stats").text("");

//     //remove intro
//     // $("#start-button").hide();







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
//function to start a 2 minute timer and display to html
function startTimer(duration, display) {

    var timer = duration, minutes, seconds;
     timey = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        timeUp++;
        //after two minutes game over
        if (timeUp >= 120) {
            $("#question").text("GAME OVER");
            //stop clock
            clearInterval(timey);
        }
    }, 1000);
}



function newQuestion(x) {
    console.log(x);
    $("#correct-answers").text("Correct Answers: " + numberCorrect);
    $("#incorrect-answers").text("Wrong Answers: " + numberIncorrect);
    var questionDisplayed = qAndA[x];
    //if no more questions game over
    if (currentQuestion === 10) {
        $("#question").text("GAME OVER");
        //stop clock
        clearInterval(timey);


    }
    //display question and answer choices from specified qandA set
    $("#question").text(questionDisplayed.question);
    $("#answer1").text(questionDisplayed.choice[0]);;
    $("#answer2").text(questionDisplayed.choice[1]);;
    $("#answer3").text(questionDisplayed.choice[2]);;
    $("#answer4").text(questionDisplayed.choice[3]);;


}

window.onload = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
    // timerBackground();
};


$(".aButton").on("click", function () {
    var userAnswer = $(this).text();
    console.log(userAnswer);
    resolveChoice(userAnswer, currentQuestion);
    newQuestion(currentQuestion);
});



newQuestion(currentQuestion);






