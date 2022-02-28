
const sevenNumber = prompt('inserisci un numero di 7 cifre');
let sum = 0;
console.log(sevenNumber);

for (let i = 0; i < sevenNumber.length; i++) {
    sum += parseInt(sevenNumber.charAt(i));    
}

console.log(sum);