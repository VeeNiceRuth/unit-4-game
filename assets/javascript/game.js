//Displays the random number targetNumber and its a global variable
var rdmNumber = document.getElementById("number").innerHTML = Math.floor((Math.random() * 120) + 19); 
var score = 0;
//starts game
function startGame() {
      
$("#number").text(rdmNumber);

//on-click of class pink (all buttons)
$(".pink").on("click", function() {
    
    //random values for all crystals
    var x = Math.floor((Math.random() * 12)+ 1);
    
    document.getElementById("score").innerHTML = x;

    console.log(x);



    

    if (score === rdmNumber) {
        document.getElementById("score").innerHTML;
    }

    else if (score >= rdmNumber) {
        document.getElementById("score").innerHTML;
        
    }

});
}
startGame();





 


    



