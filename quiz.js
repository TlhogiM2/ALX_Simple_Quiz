function checkAnswer() {
    const correctAnswer = "4"; // Correct answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Get the selected answer

    if (userAnswer) { // Ensure an answer is selected
        const feedback = document.getElementById('feedback'); 
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done."; // Feedback for correct answer
            feedback.style.color = 'green';
        } else {
            feedback.textContent = "That's incorrect. Try again!"; // Feedback for incorrect answer
            feedback.style.color = 'red';
        }
    } else {
        alert('Please select an answer.'); // Alert if no answer is selected
    }
}

// Attach event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);


