// init()
//creates counter variable to store the question number
var questionNumber = 1
var quizCard = document.getElementById("quiz-container")
//creates object with quiz answers
var quizLength = 5
class quizTemplate {
    constructor() {

    }
}
var answerKey = {
    question1Answer: "option1",
    question2Answer: "option1",
    question3Answer: "option3"
}

var quizPrompts = {
    question1: "Which dinosaur is best?",
    question2: "Which dinosaur food is the most yummiest?",
    question3: "Which dinosaur makes the coolest sound?"

}
var quizOptions = {
    q1o1: 'triceratops',
    q1o2: "t-rex",
    q1o3: "pterodactyl",
    q1o4: "brontosaurus",

    q2o1: "water",
    q2o2: "leaves",
    q2o3: "bark",
    q2o4: "other dinosaurs",

    q3o1: "velociraptor",
    q3o2: "stegosaurus",
    q3o3: "allosaurus",
    q3o4: "ichthyornis"
}

//creates object with student answers
function init() {
    var startButton = document.createElement("button")
    startButton.setAttribute("id", "startQuizButton")
    startButton.textContent = "Start Quiz"
    document.body.appendChild(startButton)
    startButton.addEventListener("click", startQuiz)
}
init()

function createQuestionPrompt() {
    var questionPrompt = document.createElement("h1")
    questionPrompt.setAttribute("id", "questionPrompt")
    quizCard.append(questionPrompt)
}
function createOptionButtons() {
    for (var i = 1; i <= 4; i++) {
        var answerOption = document.createElement("button")
        answerOption.setAttribute("id", "option" + i)
        quizCard.append(answerOption)
    }
}
function createNextButton() {
    var nextButton = document.createElement("button")
    nextButton.setAttribute("id", "next-button")
    nextButton.textContent = "NEXT"
    quizCard.append(nextButton)
}
function startQuiz() {
    startQuizButton.remove()
    createQuestionPrompt()
    createOptionButtons()
    createNextButton()

    questionNumber++
    console.log(questionNumber)
    nextQuestion()
}

function loadPrompt(){
    promptSpace = document.getElementById("questionPrompt")
    promptSpace.textContent = quizPrompts["question"+questionNumber]
}
function loadOptions(){
    
    for(var i = 1; i<=4; i++){
        optionSpace = document.getElementById("option" + i)
        optionSpace.textContent = quizOptions["q"+questionNumber+"o"+i]
    }
}

function nextQuestion() {
 
    //saves student answer object to local storage
    var nextQButton = document.getElementById("next-button")
    nextQButton.addEventListener("click", function () {
        if (questionNumber = 1) {
            //pulls prompt and options from associated objects
loadPrompt()
loadOptions()
            // option1 = document.getElementById("option1")
            // console.log(option1)
            // option1.textContent = "hello"
            questionNumber++
            console.log(questionNumber)
        } else if (1 < questionNumber && questionNumber < quizLength) {

        } else {
            // next question button is turned into submit button
        }
    }




    )
}
function previousQuestion() {
    //on selection of the previous button:
    //saves student answer object to local storage

    //if counter is >1:
    //removes 1 from counter variable
    //pulls prompt and options from associated objects

    //else if the counter is 1:
    //calls firstQuestion function

}

function firstQuestion() {

    // previous question button is removed
}

function submitQuiz() {
    //removes all card elements
    //stops timer
    //loops to compares student answer object with correct answer object
    //returns score
}




