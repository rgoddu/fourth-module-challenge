// init()
//creates counter variable to store the question number
//creates object with quiz answers
//creates object with quiz prompts and options
//creates object with logged answers
//create start button

function nextQuestion() {
    // on selection of next button:
    //if counter is less than the length of the quiz
    //adds 1 to counter variable
    //pulls prompt and options from associated objects

    //else if counter is equal to the length of quiz:
    //queues lastQuestion function
}
function previousQuestion() {
    //on selection of the previous button:
    //if counter is >1:
    //removes 1 from counter variable
    //pulls prompt and options from associated objects

    //else if the counter is 1:
    //calls firstQuestion function

}


function startQuiz() {
    //when start button is pressed:

    //removes start button element
    //creates question prompt
    //creates four option buttons
    //creates next button
    // starts timer, queues first question, adds one to counter
}

function firstQuestion() {

// previous question button is removed
}
function lastQuestion() {
    // next question button is turned into submit button

}
function submitQuiz(){
    //removes all card elements
    //stops timer
    //loops to compares student answer object with correct answer object
}