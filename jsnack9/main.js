/*
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */

const randomNumbers = [];
let sum = 0;

for (let i = 0; i < 10; i++) {
    const number = (Math.floor(Math.random() * 9999) +1 );
    randomNumbers.push(number);
    sum += number;
}

console.log(randomNumbers);
console.log(sum);
console.log(sum / randomNumbers.length);





