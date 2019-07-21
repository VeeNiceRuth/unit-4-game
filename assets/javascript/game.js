//Displays the random number targetNumber and its a global variable
var rdmNumber = document.getElementById("number").innerHTML = Math.floor((Math.random() * 100) + 19); 
var score = 0;
var winCounter = 0;
var loseCounter = 0;


function startGame() {
    rdmNumber= document.getElementById("number").innerHTML = Math.floor((Math.random() * 100) + 19);
    var crystalNumber = Math.floor((Math.random() * 12)+ 1); 
     
$("#number").text(rdmNumber);


$(".pink").on("click", function() {
    score = score + crystalNumber;
    document.getElementById("score").innerHTML = score;
    console.log(score);
    

 if (score === rdmNumber) {
     console.log("win!")
        winCounter++;
        document.getElementById("win").innerHTML = winCounter;
        startGame();
    }

    else if (score >= rdmNumber) {
        console.log("lose!");
        loseCounter++;
        document.getElementById("losses").innerHTML = loseCounter;
        score = 0;
        startGame();
    }

});
}

startGame();





 


    



