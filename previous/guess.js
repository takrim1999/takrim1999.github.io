var submitButton = document.getElementById("try");
var attemptField = document.getElementById("attempts");
var guessField = document.getElementById("guess");
var messageField = document.getElementById("message");
var lastGuess = document.getElementById("lastGuess");
var last = document.getElementById("last");
var gameOver = document.getElementById("over");

number = Math.ceil(Math.random() * 1000);

attempt = 10;
attemptField.innerHTML = attempt;

function game() {
  attempt--;
  // lastGuess.innerHTML = number;
  attemptField.innerHTML = attempt;
  if (number == guessField.value) {
    messageField.innerHTML = "You Won!";
    messageField.className = "card-footer text-center text-success";
    submitButton.onclick = () => location.reload();
    guessField.onclick = () => location.reload();
    window.onkeydown = () => location.reload();
  } else if (number > guessField.value) {
    messageField.innerHTML = "I Guessed Bigger!";
    messageField.className = "card-footer text-center text-warning";
  } else if (number < guessField.value) {
    messageField.innerHTML = "I Guessed Smaller!";
    messageField.className = "card-footer text-center text-warning";
  }
  if (attempt == 1) {
    last.innerHTML = "Last Attempt!";
    last.className = " text-center text-danger";
  }
  if (attempt == 0) {
    last.innerHTML = "Game";
    last.className = " text-center text-danger";
    // last.innerHTML = "Last Attempt!";
    messageField.innerHTML = "Over!";
    messageField.className = "card-footer text-center text-danger";
    submitButton.onclick = () => location.reload();
    guessField.onclick = () => location.reload();
    window.onkeydown = () => location.reload();
  }
  if (attempt >= 7) {
    attemptField.className = "text-success";
  } else if (attempt < 7 && attempt >= 4) {
    attemptField.className = "text-warning";
  } else if (attempt < 4) {
    attemptField.className = "text-danger";
  }
}

console.log("number: " + number);
submitButton.onclick = game;
window.onkeydown = (event) => (event.keyCode == 13 ? game() : null);
