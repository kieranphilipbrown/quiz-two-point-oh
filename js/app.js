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
			document.getElementById("oneMessage").innerText = "Yes, that's correct.";
		} else {
			document.getElementById("oneMessage").innerText = "Sorry, " + guess +" is incorrect. The correct answer is " + toTitleCase(answer) + ".";
		}
		
	document.getElementById("nextQuestion1").style.display = "block";
	document.getElementById("two").style.display = "block";
	}
});

// Second question 
var submitButton2 = document.getElementById('myButton2');
submitButton2.addEventListener('click', () => {
	var guessInput = document.getElementById('guessInput2');
	var message = document.getElementById('oneMessage2');

	var guess = guessInput.value;
	var answer = 'six';

	if (guess === '') {
		alert('Please provide an answer.');
		return;
	}
	
	submitButton2.disabled = true;

	if (progress.question === 2)
	{
		progress.question =3;

		if (guess.toLowerCase() === answer || '6' ) {
			progress.score++;
			document.getElementById("score").innerHTML = progress.score;
			document.getElementById("oneMessage2").innerText = "Yes, that's correct.";
		} else {
			document.getElementById("oneMessage2").innerText = "Sorry, " + guess +" is incorrect. The correct answer is " + toTitleCase(answer) + ".";
		}
		
	document.getElementById("nextQuestion2").style.display = "block";
	document.getElementById("three").style.display = "block";
	}
});

// Third question 
var submitButton3 = document.getElementById('myButton3');
submitButton3.addEventListener('click', () => {
	var guessInput = document.getElementById('guessInput3');
	var message = document.getElementById('oneMessage3');

	var guess = guessInput.value;
	var answer = '52';

	if (guess === '') {
		alert('Please provide an answer.');
		return;
	}
	
	submitButton3.disabled = true;

	if (progress.question === 3)
	{
		progress.question =4;

		if (guess.toLowerCase() === answer || 'fifty two') {
			progress.score++;
			document.getElementById("score").innerHTML = progress.score;
			document.getElementById("oneMessage3").innerText = "Yes, that's correct.";
		} else {
			document.getElementById("oneMessage3").innerText = "Sorry, " + guess +" is incorrect. The correct answer is " + toTitleCase(answer) + ".";
		}
		
	document.getElementById("nextQuestion3").style.display = "block";
	document.getElementById("four").style.display = "block";
	}
});

// Fourth question
var submitButton4 = document.getElementById('myButton4');
submitButton4.addEventListener('click', () => {
	var guessInput = document.getElementById('guessInput4');
	var message = document.getElementById('oneMessage4');

	var guess = guessInput.value;
	var answer = 'pc';

	if (guess === '') {
		alert('Please provide an answer.');
		return;
	}
	
	submitButton4.disabled = true;

	if (progress.question === 4)
	{
		progress.question = 5;

		if (guess.toLowerCase() === answer) {
			progress.score++;
			document.getElementById("score").innerHTML = progress.score;
			document.getElementById("oneMessage4").innerText = "Yes, that's correct.";
		} else {
			document.getElementById("oneMessage4").innerText = "Sorry, " + guess +" is incorrect. The correct answer is " + toTitleCase(answer) + " ;)";
		}
		
	document.getElementById("nextQuestion4").style.display = "block";
	document.getElementById("five").style.display = "block";
	}
});

// Fifth question
var submitButton5 = document.getElementById('myButton5');
submitButton5.addEventListener('click', () => {
	var guessInput = document.getElementById('guessInput5');
	var message = document.getElementById('oneMessage5');

	var guess = guessInput.value;
	var answer = '11';

	if (guess === '') {
		alert('Please provide an answer.');
		return;
	}
	
	submitButton5.disabled = true;

	if (progress.question === 5)
	{
		progress.question = 6;

		if (guess.toLowerCase() === answer || 'eleven') {
			progress.score++;
			document.getElementById("score").innerHTML = progress.score;
			document.getElementById("oneMessage5").innerText = "Yes, that's correct.";
		} else {
			document.getElementById("oneMessage5").innerText = "Sorry, " + guess +" is incorrect. The correct answer is " + toTitleCase(answer) + ".";
		}
		
	document.getElementById("nextQuestion5").style.display = "block";
	document.getElementById("six").style.display = "block";
	}

// Results
document.getElementById("resultMessage").innerText = "Your overall score is " + progress.score + " out of 5";
if ( progress.score === 5 ) {
	document.getElementById("result").innerText = "Congratulations, you win the gold medal.";
} else if ( progress.score >= 3 ) {
	document.getElementById("result").innerText = "Congratulations, you win the silver medal.";
} else if ( progress.score >= 1 ) {
	document.getElementById("result").innerText = "Congratulations, you win the bronze medal.";
} else {
	document.getElementById("result").innerText = "Sorry, you don't win anything. Better luck next time.";
}

document.getElementById("nextQuestion6").style.display = "block";

});