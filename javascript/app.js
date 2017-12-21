$( document ).ready(function() {

	var timeRemaining = 60;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var intervalId;


	//On click of start, button will disappear and questions will appear w/ timer.

	//Time will begin at 60 seconds and countdown
	startTimer();
	countdown();

	//Player will select answers and click done when finished.

	//If player selects correct answers, correct ++.

	//If player selects wrong answers, incorrect ++.

	//If player does not select an answer, unanswered ++.

	//On click of done, questions will disappear and score will be revealed.

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



});