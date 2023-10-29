var timerInterval;

// Defined variable for length of the quiz 
var secondsLeft = 300;
// Specifies the timeEl class from your HTML
var timeEl = document.querySelector(".timeEl");
// Creates an array with numerous objects that includes each individual question, choice and answer (consildates the questions together)
var questions = [
 {
  question: "Arrays in Javascript can be used to store _____:",
  choices: ['Numbers and strings', 'Other arrays', 'Booleans', 'All of the above'],
  answer: "All of the above"
 },
 {
  question: "Commonly used datetypes DO NOT include",
  choices: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
  answer: "Alerts"
 }, 
 {
  question: "String values must be enclosed within _____ when being assigned to variables.",
  choices: ['Commas', 'Curly brackets', 'Quotes', 'Parenthesis'],
  answer: "Quotes"
 },
 {
  question: "A very useful tool used during development and debugging for printing content to the debugger is",
  choices: ['Javascript', 'Console log', 'For loops', 'Terminal/Bash'],
  answer: "Console log"
 },
 {
  question: "The condition within an if/else statement is enclosed within ____",
  choices: ['quotes', 'Curly Brackets', 'parenthesis', 'square brackets'],
  answer: "Curly Brackets"
 }, 
];
console.log(questions[1])
console.log(questions[1].choices[2])

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
}

function HandleClick(e) {
  console.log(e.target)
index++ 
  var correctAnswer = questions[index].answer;
if (selectedAnswer !== correctAnswer) {
    // Answer is incorrect.
}

secondsLeft -= 10;

if (secondsLeft < 0) {
  secondsLeft = 0;
}

timeEl.textContent = secondsLeft + " seconds left till game is over";


// If there's another question
if (index < questions.length) {
  display();
} else {
  // End the quiz
  clearInterval(timerInterval);
  sendMessage();
}

display() 

}
// clear page 
// add id elements so i can append 
// pseudo code it 

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



    // document.getElementById('incorrect').addEventListener('click', function() {
    //   sec -= 30;
    //   document.getElementById('#startscreen').innerHTML='00:'+sec;
  // });
  startTimer();
  }

  



  // Add an event listener to the start button
  var startButton = document.getElementById("startButton");
  console.log("hi " + startButton)
  startButton.addEventListener("click", startQuiz);
}

// Initial setup when the page loads
setTime();

function sendMessage() {
  // This is a placeholder function for what you want to do when the quiz ends.
  alert("Quiz Over!");
  // You can also use window.location.href to redirect to the next page.
  window.location.href = "next_page.html";
}

document.querySelector('#quizcontainer').addEventListener("click", HandleClick)