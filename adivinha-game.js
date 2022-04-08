var numberToBeGuessed;
var guess;

function playerGuess(id) {
    sortNumber();
    guess = document.getElementById(id);
    guess = parseInt(id);
    console.log("Player guess " + guess)
    checkResult();
    //return guess;
}

function sortNumber() {
    numberToBeGuessed = Math.round(Math.random() * 10);
    if (numberToBeGuessed == 0) {
        numberToBeGuessed = Math.round(Math.random() * 10);
    }
    console.log("IA choose " + numberToBeGuessed);
    //return numberToBeGuessed;
}

function checkResult() {
    var resultado = document.getElementById("gs");
    if (playerGuess == sortNumber) {        
        resultado.innerHTML = "Nossa! Você acertou mesmo! Eu pensei no número " + numberToBeGuessed;
        console.log("ganhou" + playerGuess + sortNumber);        
    } else {
        resultado.innerHTML = "Não foi dessa vez! Eu pensei no número " + numberToBeGuessed;
        console.log("perdeu" + playerGuess + sortNumber);
    }
}

