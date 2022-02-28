const firstNumber = parseInt(prompt('Indica il primo numero'));
const secondNumber = parseInt(prompt('Indica il secondo numero'));

if (firstNumber == secondNumber) {
    console.log('sono uguali');
} else if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (firstNumber < secondNumber) {
    console.log(secondNumber);
} else {
    console.log('error');
}