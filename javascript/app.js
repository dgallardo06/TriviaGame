$( document ).ready(function() {

	var timeRemaining = 60;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var intervalId;

	var correctA1 = "superB";
	var correctA2 = "batC";
	var correctA3 = "greenD";
	var correctA4 = "flashB";
	var correctA5 = "wonderA";
	var correctA6 = "ironD";
	var correctA7 = "hulkA";
	var correctA8 = "capB";
	var correctA9 = "false";
	var correctA10 = "strangeC";

	//On click of start, button will disappear and questions will appear w/ timer.

	//Time will begin at 60 seconds and countdown
	startTimer();
	countdown();

	//Player will select answers - get player's answers
	var userA1 = document.forms["superheroTrivia"]["superman"].value;
	var userA2 = document.forms["superheroTrivia"]["batman"].value;
	var userA3 = document.forms["superheroTrivia"]["greenArrow"].value;
	var userA4 = document.forms["superheroTrivia"]["flash"].value;
	var userA5 = document.forms["superheroTrivia"]["wonderWoman"].value;
	var userA6 = document.forms["superheroTrivia"]["ironMan"].value;
	var userA7 = document.forms["superheroTrivia"]["hulk"].value;
	var userA8 = document.forms["superheroTrivia"]["captain"].value;
	var userA9 = document.forms["superheroTrivia"]["wolverine"].value;
	var userA10 = document.forms["superheroTrivia"]["strange"].value;
	//If player selects correct answers, correct ++.
	//If player selects wrong answers, incorrect ++.
	//If player does not select an answer, unanswered ++.
	checkAnswers(userA1,correctA1);
	checkAnswers(userA2,correctA2);
	checkAnswers(userA3,correctA3);
	checkAnswers(userA4,correctA4);
	checkAnswers(userA5,correctA5);
	checkAnswers(userA6,correctA6);
	checkAnswers(userA7,correctA7);
	checkAnswers(userA8,correctA8);
	checkAnswers(userA9,correctA9);
	checkAnswers(userA10,correctA10);

	//On click of submit, questions will disappear and score will be revealed.

	//If player runs out of time, questions will disappear and score will be revealed




	//*****************functions********************

	function startTimer() {
      intervalId = setInterval(countdown, 1000);
    }

	function countdown() {

      //  Decrease number by one.
      timeRemaining--;

      //  Show the number in time remaining
      $("#timeRemaining").text("Time Remaining: " + timeRemaining);

      //  Once number hits zero stop interval
      if (timeRemaining === 0) {
        clearInterval(intervalId);
      }
    }


	function checkAnswers(userAnswer, correctAnswer){
    	if (userAnswer === "") {
        	unanswered++;
        	console.log("unanswered: " + unanswered);
    	}else if (userAnswer === correctAnswer){
    		correct++;
    		console.log("correct: " + correct);
    	} else {
    		incorrect++;
    		console.log("incorrect: "+ incorrect);
    	}
	}


});