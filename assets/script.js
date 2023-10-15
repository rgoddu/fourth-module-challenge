
var questionNumber = 1
var quizLength = 3
var quizCard = document.getElementById("quiz-container")
var navigatorArea = document.getElementById("navigator")
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
var studentAnswers = {

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
    navigatorArea.append(nextButton)
    nextButton.addEventListener("click", nextQuestion)
}
function createPreviousButton() {
    var previousButton = document.createElement("button")
    previousButton.setAttribute("id", "previous-button")
    previousButton.textContent = "PREV"
    navigatorArea.prepend(previousButton)
    previousButton.addEventListener("click", previousQuestion)
}
function loadQuestion() {
    var promptSpace = document.getElementById("questionPrompt")
    promptSpace.textContent = quizPrompts["question" + questionNumber]
    for (var i = 1; i <= 4; i++) {
        var optionSpace = document.getElementById("option" + i)
        optionSpace.textContent = quizOptions["q" + questionNumber + "o" + i]
    }
}
function startQuiz() {
    startQuizButton.remove()
    createQuestionPrompt()
    createOptionButtons()
    createNextButton()
    loadQuestion()
    console.log("hello, passed start")
}
selectAnswer()
function selectAnswer() {
    quizCard.addEventListener("click", (event) => {
        var buttonClicked = event.target
        var selectOption1 = document.getElementById("option1")
        var selectOption2 = document.getElementById("option2")
        var selectOption3 = document.getElementById("option3")
        var selectOption4 = document.getElementById("option4")
        if (buttonClicked === selectOption1) {
            studentAnswers[questionNumber] = "option1"

        } else if (buttonClicked === selectOption2) {
            studentAnswers[questionNumber] = "option2"
        }
        else if (buttonClicked === selectOption3) {
            studentAnswers[questionNumber] = "option3"
        }
        else if (buttonClicked === selectOption4) {
            studentAnswers[questionNumber] = "option4"
        }
        console.log(studentAnswers)
    })
}
function nextQuestion() {
    console.log("trip#2")
    //saves student answer object to local storage

    if (questionNumber === 1) {
        questionNumber++
        loadQuestion()
        createPreviousButton()

        console.log("triphere aosidf")
    } else if ((1 < questionNumber) && (questionNumber < (quizLength-1))) {
        questionNumber++
        loadQuestion()

    } else if (questionNumber === (quizLength-1)) {
        questionNumber++
        loadQuestion()
        var nextQButton = document.getElementById("next-button")
        nextQButton.textContent = "SUBMIT"
        // next question button is turned into submit button
    }else if(questionNumber === quizLength){
        console.log("submit quiz")
        submitQuiz()
    }
}
function previousQuestion() {
    //on selection of the previous button:
    //saves student answer object to local storage+
    
    if (questionNumber === 2) {
        questionNumber-- 
        loadQuestion()
        prevQButton = document.getElementById("previous-button")
        prevQButton.remove()
    }else if(questionNumber>2){
        var nextQButton = document.getElementById("next-button")
        nextQButton.textContent = "NEXT"
        questionNumber--
        loadQuestion()
    }

    //if counter is >1:
    //removes 1 from counter variable
    //pulls prompt and options from associated objects

    //else if the counter is 1:


}



function submitQuiz() {
    navigatorArea.remove()
    quizCard.remove()
    var scoreCard = document.createElement("card")
    scoreCard.textContent = "Your score is: YOU FUCKING SUCK"
    document.children[0].append(scoreCard)
    //removes all card elements
    //stops timer
    //loops to compares student answer object with correct answer object
    //returns score
}




