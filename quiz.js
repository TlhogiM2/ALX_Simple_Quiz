// Function to check the user's answer
function checkAnswer() {
    const correctAnswer = "4"; // Define the correct answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Retrieve the user's selected answer

    if (userAnswer) { // Ensure the user selected an answer
        const feedback = document.getElementById('feedback');
        
        if (userAnswer === correctAnswer) { 
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

// Add event listener for the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
