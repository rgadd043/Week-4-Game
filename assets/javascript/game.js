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
      gameReset();
    });

      function gameReset(){
        if (playerTotal === randomTargetNumber){
          wins++;
          playerTotal = 0;
          $(".playerScore").html("Generate new number, then click a gem.");
          randomTargetNumber = 0;
          $("#randomNumberSection").html("The target number is: " + randomTargetNumber);
          $("#winCount").html("Wins: " +wins)
          alert("You've won. Click to generate a new number.");
        }
        else if (playerTotal > randomTargetNumber) {
          losses++;
          playerTotal = 0;
          $(".playerScore").html("Generate new number, then click a gem.");
          randomTargetNumber = 0;
          $("#randomNumberSection").html("The target number is: " + randomTargetNumber);
          $("#lossCount").html("Losses: " +losses)
          alert("You've lost. Click to generate a new number.");
        }
      }
            
  
});