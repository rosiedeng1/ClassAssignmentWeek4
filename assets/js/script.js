var secondsLeft = 100;
var timeEl = document.querySelector(".timeEl");

function setTime() {
  // Sets interval in variable
  var timerInterval;

  function startQuiz() {
    // Start the quiz by setting the interval and updating the timer
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till game is over";

      if (secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
    }, 1000);
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
  // window.location.href = "next_page.html";
}
