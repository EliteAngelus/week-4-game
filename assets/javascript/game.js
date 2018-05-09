// VARIABLES SET TO 0
var numbersum = 0;
var matchNum = 0;
var wins = 0;
var losses = 0;

// IF ELSE STATEMENT STATING CONDITIONS FOR WINS OR LOSSES
var logic = function() {
    // IF THE NUMBER IS EQUAL TO THE NUMBER GENERATED. ALERT THE USER
    // SHOW THE RESET BUTTON, HIDE THE CRYSTAL BUTTONS, INCREASES THE COUNTER.
    if (numbersum === matchNum) {
        document.getElementById('correct').play();
        wins++;
        console.log(wins);
        alert("You win!")
        $("#resetButton").show()
        $(".pulse").hide()
        $("#win").html("<p>Wins: " + wins + "</p>");

    } // IF THE NUMBER IS MORE TO THE NUMBER GENERATED. ALERT THE USER
    // SHOW THE RESET BUTTON, HIDE THE CRYSTAL BUTTONS, INCREASES THE COUNTER.
    else if (numbersum > matchNum) {
        document.getElementById('wrong').play();
        losses++;
        console.log(losses);
        alert("You lose!")
        $("#resetButton").show()
        $(".pulse").hide()
        $("#lose").html("<p>Losses: " + losses + "</p>");

    } else if (losses > 4) {
        alert("You Lose! GAME OVER")
        document.getElementById('zelda').pause();
        document.getElementById('gameOver').play();
        location.reload();
    } else if (win > 4) {
        alert("You Win! GAME OVER")
        location.reload();
    }

}

//THE GAMES FUNCTIONS: TELLS THE GAME TO FIRST HIDE THE RESET BUTTON. ASSIGNS RANDOM NUMBERS
// TO THE CRYSTALS, WITH AN ON CLICK FUNCTION FOR EACH CRYSTAL.  

function game() {

    $("#gameOver").hide();
    $("#resetButton").hide();

    redCrys = Math.floor(Math.random() * 12) + 1;
    yelCrys = Math.floor(Math.random() * 12) + 1;
    pinCrys = Math.floor(Math.random() * 12) + 1;
    purCrys = Math.floor(Math.random() * 12) + 1;

    console.log(numbersum);

    matchNum = Math.floor(Math.random() * 120 + 19);
    $(".resultsDigits").html(matchNum);

    $('#red').on('click', function() {
        numbersum += redCrys;

        $('.countDigits').html(numbersum);

        logic();
    });

    $('#yellow').on('click', function() {
        numbersum += yelCrys;
        $('.countDigits').html(numbersum);
        logic();
        console.log(yelCrys);
    });
    $('#pink').on('click', function() {
        numbersum += pinCrys;
        $('.countDigits').html(numbersum);
        logic();

    });
    $('#purple').on('click', function() {
        var total = numbersum += purCrys;
        $('.countDigits').html(total);
        logic();
    });

}
// THE RESET BUTTON, 
// 1. WILL GENERATE A NEW RANDOM NUMBER TO BE MATCH, 
// 2. WILL HIDE THE RESET BUTTON UNTIL THE IF/ELSE STATMENT SHOWS IT AGAIN, 
// 3. EMPTIES THE SCORE-COUNT DIV, 
// 4. SHOWS THE CRYSTAL IMAGES THAT HIDE WHEN THE GAME IS COMPLETED. 
// 5. GENERATES NEW RANDOM NUMBERS FOR THE CRYSTAL IMAGES
// 6. RETURNS THE SUM OF THE CRYSTAL NUMBERS (numberSum) BACK TO 0.

$("#resetButton").on('click', function() {
    matchNum = Math.floor(Math.random() * 120 + 19);
    $(".resultsDigits").html(matchNum);
    $("#resetButton").hide();
    $(".countDigits").html(" ");
    $(".pulse").show()
    redCrys = Math.floor(Math.random() * 12) + 1;
    yelCrys = Math.floor(Math.random() * 12) + 1;
    pinCrys = Math.floor(Math.random() * 12) + 1;
    purCrys = Math.floor(Math.random() * 12) + 1;
    console.log("works");
    numbersum = 0;
})


game();