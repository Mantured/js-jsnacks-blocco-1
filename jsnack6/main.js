


const message = document.getElementById('message');


//const sevenNumbers = prompt('inserisci un numero di 7 cifre').split(''); //split version
let sum = 0;

const sevenNumbers = prompt('inserisci un numero di 7 cifre'); // no split version 


console.log(sevenNumbers);

// #versione con il for ()i
for (let i = 0; i < sevenNumbers.length; i++) {
    sum += parseInt(sevenNumbers.charAt(i));    
}

//# versione con sevenNumbers and number come variabili al posto di i 

/* for (let number of sevenNumbers) {
    sum += parseInt(number);
} */

message.innerHTML = `Sum is ${sum}`
console.log(sum);