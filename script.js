/* Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero */


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let randomArray = [];

for (let i = 0; i < 5; i++) {
    const randomNumb = getRandomNumber(1, 100);
    randomArray.push(randomNumb); 
}

const firstMessage = alert (`Memorizza i seguenti numeri: ${randomArray}`);

const clock = setTimeout(memoryTime, 3000);

// ° Creo array con numeri dell'utente
const gettedNumbers = [];

function memoryTime() {
    askNumbers = parseInt(prompt('Inserisci i numeri che hai memorizzato'));
    gettedNumbers.push(askNumbers);
    console.log(gettedNumbers);
}

// ° Controllo se ha indovinato qualche numero 
gettedNumbers.forEach(number => {
    if (number == randomArray[0]){
        console.log('Hai indovinato il primo numero');
    }
});


