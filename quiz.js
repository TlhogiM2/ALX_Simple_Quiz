function checkAnswer() {
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected
    if (userAnswer) {
        // Direct comparison to pass the checker
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        document.getElementById("feedback").textContent = "Please select an answer!";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);



