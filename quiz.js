function checkAnswer() {
    const correctAnswer = "4"; // Declare the correct answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Get the user's selected answer

    if (userAnswer) { // Check if an answer is selected
        const feedback = document.getElementById('feedback');
        // Compare user's answer with the correct answer
        if (userAnswer.value === correctAnswer) { 
            feedback.textContent = "Correct! Well done."; // Feedback for correct answer
            feedback.style.color = 'green';
        } else {
            feedback.textContent = "That's incorrect. Try again!"; // Feedback for incorrect answer
            feedback.style.color = 'red';
        }
    } else {
        alert('Please select an answer.'); // Handle case where no answer is selected
    }
}

// Attach an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

