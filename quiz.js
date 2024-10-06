// Function to check the user's answer
function checkAnswer() {
    const correctAnswer = "4"; // Define the correct answer as a string
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Retrieve the user's selected answer

    if (userAnswer) { // Ensure the user selected an answer
        const feedback = document.getElementById('feedback');
        // Direct comparison of userAnswer's value with correctAnswer
        if (userAnswer.value === correctAnswer) { 
            feedback.textContent = "Correct! Well done."; // Display feedback for correct answer
            feedback.style.color = 'green';
        } else {
            feedback.textContent = "That's incorrect. Try again!"; // Display feedback for incorrect answer
            feedback.style.color = 'red';
        }
    } else {
        alert('Please select an answer.'); // Alert if no answer is selected
    }
}

// Add an event listener to the submit button to invoke the checkAnswer function on click
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
