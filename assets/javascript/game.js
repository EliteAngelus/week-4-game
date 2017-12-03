var numbersum = 0;
var matchNum = 0;
var wins = 0;
var losses = 0;

$("#resetButton").on('click', function(){
	matchNum = Math.floor(Math.random() * 120 + 19) ;
	$("#numToMatch").html(matchNum);
	$("#resetButton").hide();
	$("#score-count").html(" ");
	$(".crystal-images").show()
	numbersum = 0;
	redCrys = Math.floor(Math.random() * 12) + 1;
	yelCrys =  Math.floor(Math.random() * 12) + 1;
	pinCrys =  Math.floor(Math.random() * 12) + 1;
	purCrys =  Math.floor(Math.random() * 12) + 1;		
	console.log("works");
})	

var logic = function(){
	if (numbersum === matchNum ) {
		wins++;
	console.log(wins);
	alert("You win!")
	$("#resetButton").show()
	$(".crystal-images").hide()
	$("#results").append("<p>Wins: " + wins + "</p>");
	
}
	else if(numbersum > matchNum){
		losses++;
		console.log(losses);
		alert("You lose!")
		$("#resetButton").show()
		$(".crystal-images").hide()
		$("#results").append("<p>Losses: " + losses + "</p>");
	
	}	
	
}
		
function game(){

$("#resetButton").hide();

redCrys = Math.floor(Math.random() * 12) + 1;
yelCrys =  Math.floor(Math.random() * 12) + 1;
pinCrys =  Math.floor(Math.random() * 12) + 1;
purCrys =  Math.floor(Math.random() * 12) + 1;					

console.log(numbersum);

	matchNum = Math.floor(Math.random() * 120 + 19) ;
	$("#numToMatch").html(matchNum);

	$('#red').on('click', function(){
  	numbersum += redCrys;

	 $('#score-count').html(numbersum);

	 logic();	
	});

	$('#yellow').on('click', function(){
	  	numbersum += yelCrys;
	 $('#score-count').html(numbersum);
	  logic();	
	  console.log(yelCrys);
	});
	$('#pink').on('click', function(){
	  	numbersum += pinCrys;
	 $('#score-count').html(numbersum);
	 logic();	

	});
	$('#purple').on('click', function(){
	  	var total = numbersum += purCrys;
	 $('#score-count').html(total);
	 logic();	
	});
	
}

game();