function init() {
    var startButton = document.createElement("button")
    startButton.setAttribute("id", "startQuizButton")
    startButton.textContent = "Start Quiz"
    document.body.appendChild(startButton)
    startButton.addEventListener("click", startQuiz)
}
init()
//counter variable for q number
var questionNumber = 1
//number of quiz questions (note: prompt & options must be manually input)
var quizLength = 3
var answerKey = {
    question1Answer: "option1",
    question2Answer: "option4",
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
//counter variable for number of questions student answered correctly
var studentScore = 0
var studentAnswers = {
}
//quiz time allowance
var timeLeft = 20

var quizCard = document.getElementById("quiz-container")
var navigatorArea = document.getElementById("navigator")

function startQuiz() {
    startQuizButton.remove()
    createQuestionPrompt()
    createOptionButtons()
    createNextButton()
    loadQuestion()

    //code to set up timer - timer counts down, submits quiz if it hits 0 - otherwise paused if submit button is hit
    var timeDisplay = document.getElementById("header")
    var quizSumbitted = false
    var timerInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = "DINOSAUR QUIZ Time Left: " + timeLeft
        if (timeLeft === 0) {
            clearInterval(timerInterval)
            submitQuiz()
        }
        else if (quizSumbitted === true) {
            clearInterval(timerInterval)
        }
    }, 1000);

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
        })
    }
    function nextQuestion() {
        if (questionNumber === 1) {
            questionNumber++
            loadQuestion()
            createPreviousButton()
        } else if ((1 < questionNumber) && (questionNumber < (quizLength - 1))) {
            questionNumber++
            loadQuestion()

        } else if (questionNumber === (quizLength - 1)) {
            questionNumber++
            loadQuestion()
            var nextQButton = document.getElementById("next-button")
            nextQButton.textContent = "SUBMIT"
        } else if (questionNumber === quizLength) {
            quizSumbitted = true
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
        } else if (questionNumber > 2) {
            var nextQButton = document.getElementById("next-button")
            nextQButton.textContent = "NEXT"
            questionNumber--
            loadQuestion()
        }
    }
    function checkScore() {
        for (var scoreQuestion = 1; scoreQuestion <= quizLength; scoreQuestion++) {
            var correctAnswer = answerKey["question" + scoreQuestion + "Answer"]
            var givenAnswer = studentAnswers[scoreQuestion]
            if (correctAnswer === givenAnswer) {
                studentScore++;
            }
        }
    }
    function submitQuiz() {
        //clears screen and returns the score
        navigatorArea.remove()
        quizCard.remove()
        checkScore()
        var scoreCard = document.createElement("card")
        scoreCard.setAttribute("id", "scorecard")
        scoreCard.textContent = "Your score is: " + studentScore + "/" + quizLength
        document.children[0].append(scoreCard)
        storeScoreQuestion()
        }
    function storeScoreQuestion(){
        var scoreStore = document.createElement("card")
        var userName = document.createElement("input")
        userName.setAttribute("placeholder", "enter username")
        var userNameInput = userName.value
        var saveScore = document.createElement("button")
        saveScore.textContent = "save score"
        saveScore.addEventListener("click", storeScore)
        scoreStore.append(userName)
        scoreStore.append(saveScore)
        document.getElementById("scorecard").append(scoreStore)
    function storeScore(){
        // localStorage.setItem
        console.log(userNameInput)
    }
    }
}



