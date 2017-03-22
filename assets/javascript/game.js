// Variables
 
var playerTotal = 0;
var wins = 0;
var losses = 0;
var randomTargetNumber = 0;

//

$(document).ready(function() {
	
	$("#randomNumberButton").on("click", function() {
    	var randomTargetNumber = Math.floor(Math.random() * 121-19) + 19;
        $("#randomNumberSection").html("The target number is: " +randomTargetNumber);
        return randomTargetNumber;
    });

    console.log(randomTargetNumber);

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
    

    });

    // if (playerTotal === randomTargetNumber) {
    // 	$("#announcement").html(" You've Win!")
    // }

    // else if (playerTotal > randomTargetNumber) {
    // 		$("#announcement").html(" You've lost!")
    // 	};
    
 

});


///When one of the crystals gets clicked
// $(".crystal").on("click", function(){

//     //Add the value attribute of the clicked crystal to the player total
//     playerTotal += parseInt($(this).attr("value"));
//     //Update the player's score in the html
//     $(".playerScore").html("Your total score is: " + playerTotal);
































