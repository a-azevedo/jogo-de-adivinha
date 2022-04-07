var numberToBeGuessed; 

var guess;//parseInt(prompt("Já pensei! Qual número você acha que é?"));

function sortNumber(){
    numberToBeGuessed = Math.round(Math.random() * 10);
    if(numberToBeGuessed == 0){
        numberToBeGuessed = Math.round(Math.random() * 10);
    }
}
function skipALine(){
    document.write("<br>")
}
function showMessage(message){
    document.write(message);
    skipALine();
}
sortNumber();
console.log(numberToBeGuessed);
if (guess == numberToBeGuessed){
    showMessage("Nossa! Você acertou mesmo! Eu pensei no número " + numberToBeGuessed);
} else {
    showMessage("Não foi dessa vez. Eu pensei no " + numberToBeGuessed);
}

