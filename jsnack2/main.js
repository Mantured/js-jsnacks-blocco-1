const firstWord = (prompt('scrivi una parola a piacere'));
const secondWord = (prompt('scrivi un\'altra parola a piacere'));

if (firstWord.length == secondWord.length) {
    console.log(`${firstWord} e ${secondWord} hanno la stessa lunghezza`);
} else if (firstWord.length > secondWord.length) {
    console.log(`${firstWord} è la parola o frase più lunga`);
} else if (firstWord.length < secondWord.length) {
    console.log(`${ secondWord } 'è la parola o frase più lunga`);
} else {
    console.log('error');
}

//versione con imput


/* const firstWord = document.getElementById('first-word');
const secondWord = document.getElementById('second-word');
console.log(firstWord);
console.log(secondWord);

function wordHeavy() {
    if (firstWord.length === secondWord.length) {
        console.log(`${firstWord.value} e ${secondWord.value} hanno la stessa lunghezza`);
    } else if (firstWord.length > secondWord.length) {
        console.log(`${firstWord.value} è la parola o frase più lunga`);
    } else (firstWord.length < secondWord.length) {
        console.log(`${secondWord.value} 'è la parola o frase più lunga`);
    }

    firstWord.value = "";
    secondWord.value = "";
}


document.querySelector('button').addEventListener(`click`, wordHeavy); */