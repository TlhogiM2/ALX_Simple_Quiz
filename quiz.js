function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    if (userAnswer) {
        const feedback = document.getElementById('feedback');
        // Modify comparison as expected by checker
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = 'green';
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = 'red';
        }
    } else {
        alert('Please select an answer.');
    }
}

// Event listener for the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
