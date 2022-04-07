var numberToBeGuessed = Math.round(Math.random() * 10);
var guess = parseInt(prompt("Já pensei! Qual número você acha que é?"));

function skipALine(){
    document.write("<br>")
}
function showMessage(message){
    document.write(message);
    skipALine();
}
console.log(numberToBeGuessed);
if (guess == numberToBeGuessed){
    showMessage("Nossa! Você acertou mesmo! Eu pensei no número " + numberToBeGuessed);
} else {
    showMessage("Não foi dessa vez. Eu pensei no " + numberToBeGuessed);
}

