let oddNumbers = [];

for (let i = 0; i < 7; i++) {
    const number = parseInt(prompt('inserisci un numero'));
    console.log(number);
    if (number % 2 != 0) {
        oddNumbers.push(number);
    } else {
        console.log('è pari!');
    }

    console.log(oddNumbers);
}