var timerInterval;

// Defined variable for length of the quiz 
var secondsLeft = 200;
// Specifies the timeEl class from your HTML
var timeEl = document.querySelector(".timeEl");

// Creates an array with numerous objects that includes each individual question, choice and answer (consildates the questions together)
var questions = [
 {
  question: "Arrays in Javascript can be used to store _____:",
  choices: ['1. Numbers and strings', '2. Other arrays', '3. Booleans', '4. All of the above'],
  answer: "4. All of the above"
 },
 {
  question: "Commonly used datetypes DO NOT include",
  choices: ['1. Strings', '2. Booleans', '3. Alerts', '4. Numbers'],
  answer: "3. Alerts"
 }, 
 {
  question: "String values must be enclosed within _____ when being assigned to variables.",
  choices: ['1. Commas', '2. Curly brackets', '3. Quotes', '4. Parenthesis'],
  answer: "3. Quotes"
 },
 {
  question: "A very useful tool used during development and debugging for printing content to the debugger is",
  choices: ['1. Javascript', '2. Console log', '3. For loops', '4. Terminal/Bash'],
  answer: "2. Console log"
 },
 {
  question: "The condition within an if/else statement is enclosed within ____",
  choices: ['1. Quotes', '2. Curly Brackets', '3. Parenthesis', '4. Square brackets'],
  answer: "2. Curly Brackets"
 }, 
];
console.log(questions[1])
console.log(questions[1].choices[2])

// var questions = document.querySelector(".question")

// Clears page so you can go onto the next question; appended the questions 
var index = 0
function display() {
document.querySelector('#quizcontainer').innerHTML=""  
// Creates variable to help identify which question you are referring to
var current = questions[index]
var questionEl = document.createElement('h3')
questionEl.textContent=current.question
document.querySelector('#quizcontainer').append(questionEl)

// Creates a forloop for your choices to the questions 
for (i=0; i<current.choices.length; i++) {
  var button = document.createElement('button')
  button.textContent=current.choices[i]
  document.querySelector('#quizcontainer').append(button)
}

// Manipulated handleclick function so that time can be deducted from quiz if question is answered incorrectly 
}
function HandleClick(e) {
  console.log(e.target)
  if (e.target.matches("button")) {
    var selectedAnswer = e.target.textContent;
    var correctAnswer = questions[index].answer;
    console.log(selectedAnswer)
    console.log(correctAnswer)

    if (selectedAnswer !== correctAnswer) {
      // If the answer is incorrect, 10 seconds are deducted
      secondsLeft -= 10;

      if (secondsLeft < 0) {
        secondsLeft = 0;
      }
    }
    timeEl.textContent = secondsLeft + " seconds left till game is over";
    index++;
    if (index < questions.length) {
      display();
    } else {
      clearInterval(timerInterval);
      sendMessage();
    }
  }
}

// add id elements so i can append 


function setTime() {
  // Sets interval in timeInterval variable

  function startQuiz() {
    // Start the quiz by setting the interval and updating the timer
    document.querySelector('#startScreen').style.display="none"
    display()
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till game is over";

      if (secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
    // Amount of time in milliseconds between each interval
    }, 1000);

  // startTimer();
  }



  // Added an event listener to the start button
  var startButton = document.getElementById("startButton");
  console.log("hi " + startButton)
  startButton.addEventListener("click", startQuiz);
}

// Initial setup when the page loads
setTime();

function sendMessage() {
// Alert method that notifies quiz is over when quiz ends
  alert("Quiz Over!");
  // Window.location.href redirects to the next page.
  window.location.href = "next_page.html";
}

document.querySelector('#quizcontainer').addEventListener("click", HandleClick)