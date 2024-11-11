// Colors for the background cycle
const colors = ["#4e54c8", "#8f94fb", "#ff4b5c", "#ffa69e", "#6a0572", "#d90368"];

function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}

// Change the background color every 3 seconds
setInterval(changeBackgroundColor, 3000);

// Existing game code
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById("guess");
    const guess = Number(guessInput.value);
    const resultDisplay = document.getElementById("result");

    if (guess < 1 || guess > 100) {
        resultDisplay.textContent = "Please enter a number between 1 and 100!";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        resultDisplay.textContent = `Congratulations! You guessed it in ${attempts} attempts. 🎉`;
        resultDisplay.style.color = "lightgreen";
        document.querySelector(".reset-btn").style.display = "block";
    } else if (guess < randomNumber) {
        resultDisplay.textContent = "Too low! Try again.";
        resultDisplay.style.color = "red";
    } else {
        resultDisplay.textContent = "Too high! Try again.";
        resultDisplay.style.color = "orange";
    }

    guessInput.value = "";
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("result").textContent = "";
    document.querySelector(".reset-btn").style.display = "none";
    document.getElementById("guess").value = "";
}
