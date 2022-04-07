var numberToBeGuessed;

var guess;

function playerGuess(id) {
    sortNumber();
    guess = document.getElementById(id);
    guess = parseInt(id);
    console.log("Player guess " + guess)
    checkResult();
    return guess;
}

function sortNumber() {
    numberToBeGuessed = Math.round(Math.random() * 10);
    if (numberToBeGuessed == 0) {
        numberToBeGuessed = Math.round(Math.random() * 10);
    }
    console.log("IA choose " + numberToBeGuessed);
    return numberToBeGuessed;
}

function skipALine() {
    //document.write("<br>")
}

function showMessage(message) {
    document.write(message);    
    skipALine();
}
function checkResult(){
    console.log(guess);
    console.log(numberToBeGuessed);
    if (guess == numberToBeGuessed) {
        var resultado  = document.getElementById("gs");
        resultado.value = "Nossa! Você acertou mesmo! Eu pensei no número " + numberToBeGuessed;
        
    } else {
        
       document.getElementById("gs").value = "dsadasdas"
    }
}
