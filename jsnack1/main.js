/*
L'utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/


const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const box = document.getElementById('box');

function print() {
    if (firstNumber.value === secondNumber.value) {
        box.append('I due numeri inseriti sono uguali')
        console.log('sono uguali');
    } else if (firstNumber.value > secondNumber.value) {
        box.append(`${firstNumber.value}`)
        console.log(firstNumber.value);
    } else if (firstNumber.value < secondNumber.value) {
        box.append(`${secondNumber.value}`)
        console.log(secondNumber.value);
    } 
    firstNumber.value = "";
    secondNumber.value = "";
}

document.querySelector('button').addEventListener(`click`, print);