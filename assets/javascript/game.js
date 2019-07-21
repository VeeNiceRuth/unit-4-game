//Displays the random number targetNumber and its a global variable
var rdmNumber = document.getElementById("number").innerHTML = Math.floor((Math.random() * 121) + 19); 
var score = 0;
//starts game

function startGame() {
    var crystalNumber = Math.floor((Math.random() * 12)+ 1);  
$("#number").text(rdmNumber);


$(".pink").on("click", function() {
    score = score + crystalNumber;
    document.getElementById("score").innerHTML = score;
    console.log(score )
    

    console.log(typeof(crystalNumber));

 if (score === rdmNumber) {
        console.log("win")
        document.getElementById("score").innerHTML;
    }

    else if (score >= rdmNumber) {
        console.log("lose")
        score = 0;
        
        startGame();
    }

});
}

startGame();





 


    



