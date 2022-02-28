/*
L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/


const firstWord = document.getElementById('first-word');
const secondWord = document.getElementById('second-word');
const box = document.getElementById('box');
console.log(firstWord);
console.log(secondWord);

function wordHeavy() {
    if (((firstWord.value).length) === ((secondWord.value).length)) {
        box.append(`Le parole inserite sono della stessa lunghezza`);
        console.log('sono uguali');
    } else if (((firstWord.value).length) >= ((secondWord.value).length)) {
        box.append(`${firstWord.value} ${secondWord.value}`);
        console.log(firstWord.value + " " + secondWord.value); //* le  "" per lasciare spazio tra le due parole
    } else {
        box.append(`${secondWord.value} ${firstWord.value}`);
        console.log(secondWord.value + " " + firstWord.value);
    }
    firstWord.value = "";
    secondWord.value = "";
};

function resetPage() {
    window.location.reload();
};

document.getElementById('submit-word').addEventListener(`click`, wordHeavy);
document.getElementById('reset-page').addEventListener(`click`, resetPage);