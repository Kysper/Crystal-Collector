


$(document).ready(function () {
    var counter = 0;
    win=0;
    lose =0;
    function gameLoop(){
        randomNum = Math.floor((Math.random()) * (120 - 19) + 19);
        $("#number-display").html("<div> Number to Guess: <br>" + randomNum + "</div>");}
    
        randomNum = Math.floor((Math.random()) * (120 - 19) + 19);
    
    $("#number-display").html("<div> Number to Guess: <br>" + randomNum + "</div>");
  
    var crystalNumbers = [ 
        Math.floor((Math.random()) * (9 - 1) + 1), 
        Math.floor((Math.random()) * (9 - 1) + 1),  
        Math.floor((Math.random()) * (9 - 1) + 1), 
        Math.floor((Math.random()) * (9 - 1) + 1)];
    imageArray = ["browncrystal.png","greencrystal.png", "redcrystal2.png", "purplecrystal.png"];
    
    for ( var i = 0; i < crystalNumbers.length; i++) 
    {
        var createCrystal = $("<img>");

        createCrystal.addClass("crystal")
        createCrystal.attr("src", "../unit-4-game/assets/images/"+imageArray[i]);

        createCrystal.attr("crystaldata", crystalNumbers[i]);

        $(".gem-location").append(createCrystal);
    }

    $(".crystal").on("click", function() {

        
    
        var num = $(this).attr("crystaldata");
        num = parseInt(num);
        counter += num ;
    
        $("#score").text("Score: " + counter);
    
        if (counter === randomNum) {
            win++
            $("#winner-loser").text("You win!");
          $("#win").text("Wins:"+win);
          counter = 0;
         gameLoop();
        
        }
    
        else if (counter >= randomNum) {
            lose++
            $("#winner-loser").text("You lose!");
          $("#lose").text("Losses: "+lose);
          counter = 0;
         gameLoop();
        }
    
      });
});