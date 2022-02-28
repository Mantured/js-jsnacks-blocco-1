/**
 * 
Il software deve chiedere per 10 volte all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */

/* ci ho provato! */


let sum = 0;

for (let i = 1; i <= 10; i++) {
    const number = parseInt(prompt('inserisci un numero'));
    console.log(number);
    sum += number;
}

console.log(sum);


/* let sum = 0;

document.querySelector('button').addEventListener(`click`, function () {
    for (let i = 1; i <= 10; i++) {
        let number = document.querySelector('input');
        console.log(number);
        sum += number.value;
        number.value = sum += number.value;
    }
    
    console.log(sum);
})  */


/* 
function getNumber(count) {
    const number = document.getElementById(count);
}

const numbers = document.getElementById('numbers');

for (let i = 1; i <= 10; i++){
    (function () {
        let k = i + 1;
        let boxA = count[i].parentNode.id;
        count[k]

    }());
}


let sum = 0;
const number =document.querySelector('input')

for (let i = 1; i <= 10; i++) {
    if (i <= 10) {
        number.value;
        console.log(number.value);
        sum += number.value;
        console.log(sum);
    }

} */

/* function getNumber(countNumber, countInput) {
    const cN = document.getElementById(countNumber);
    const cI = document.getElementById(countInput);
}

const countNumber = document.getElementById('numbers');

for (let i = 0; i <= 10; i += 2) {
    (function () {
        let k = i + 1;
        let boxa = countNumber[i].parentNode.id;
        let boxb = countNumber[k].parentNode.id;
        countNumber[i].addEventListener("click", function() { getNumber(boxa,boxb); }, false);
        countNumber[k].addEventListener("click", function() { getNumber(boxb,boxa); }, false);
    }()); // immediate invocation */






