/*
This is a 5 question quiz that will track the players answers and how many questions they have answered correctly.
*/

// Assume player didn't guess correctly
var correctGuess = false;

// Track progress
var progress = {
	question : 1,
	score : 0
};

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// First question
var submitButton = document.getElementById('myButton');
submitButton.addEventListener('click', () => {
	var guessInput = document.getElementById('guessInput');
	var message = document.getElementById('oneMessage');

	var guess = guessInput.value;
	var answer = 'london';

	if (guess === '') {
		alert('Please provide an answer.');
		return;
	}
	
	submitButton.disabled = true;

	if (progress.question === 1)
	{
		progress.question = 2;

		if (guess.toLowerCase() === answer) {
			progress.score++;
			document.getElementById("score").innerHTML = progress.score;
			document.getElementById("oneMessage").innerText = "Yes that's correct";
		} else {
			document.getElementById("oneMessage").innerText = "Sorry, " + guess +" is incorrect, the correct answer is " + toTitleCase(answer);
		}
		
	document.getElementById("nextQuestion1").style.display = "block";
	document.getElementById("two").style.display = "block";
	}
});

// Second question
var submitButton = document.getElementById('myButton');
submitButton.addEventListener('click', () => {
	var guessInput = document.getElementById('guessInput');
	var message = document.getElementById('oneMessage');

	var guess = guessInput.value;
	var answer = 'six';

	if (guess === '') {
		alert('Please provide an answer.');
		return;
	}
	
	submitButton.disabled = true;

	if (progress.question === 1)
	{
		progress.question = 2;

		if (guess.toLowerCase() === answer) {
			progress.score++;
			document.getElementById("score").innerHTML = progress.score;
			document.getElementById("oneMessage").innerText = "Yes that's correct";
		} else {
			document.getElementById("oneMessage").innerText = "Sorry, " + guess +" is incorrect, the correct answer is " + toTitleCase(answer);
		}
		
	document.getElementById("nextQuestion2").style.display = "block";
	document.getElementById("three").style.display = "block";
	}
});
