function checkAnswer() {
    const correctAnswer = "4";
    
    // Get the user's selected answer's value directly
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    
    // Check if an answer was selected
    if (userAnswer) {
        // Compare the userAnswer with the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        document.getElementById("feedback").textContent = "Please select an answer!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);





