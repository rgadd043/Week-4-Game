//
$(document).ready(function() {

     var playerTotal = 0;
     var wins = 0;
     var losses = 0;
     var randomTargetNumber = 0;

	$("#randomNumberButton").on("click", function() {
    	randomTargetNumber = Math.floor(Math.random() * 120) + 19;
        $("#randomNumberSection").html("The target number is: " + randomTargetNumber);
        console.log(randomTargetNumber);
     });


	function randomGemNumber(){
		var gemNumber = Math.floor(Math.random() * 12) + 1;
		return gemNumber;
	}

	$(".diamond").attr("value", randomGemNumber());
    $(".emerald").attr("value", randomGemNumber());
    $(".ruby").attr("value", randomGemNumber());
    $(".topaz").attr("value", randomGemNumber());

    $(".gems").on("click", function() {
    	playerTotal = playerTotal + parseInt($(this).attr("value"));
    	$(".playerScore").html(playerTotal);
     	checkStatusOfGame();
    });

    // Make a function run whenever something is clicked.  Make sure to put this function inside the document.ready().
     function checkStatusOfGame() {
          console.log(playerTotal);
          if (playerTotal === randomTargetNumber) {
          	$("#announcement").html(" You've won!");
          	alert("You've won! Refresh the browser to play again.")
            }
          else if (playerTotal > randomTargetNumber){
          	$("#announcement").html("You've lost.");
          	alert("You've lost. Please refresh the browser to play again.");
          }
        };


            
  
});