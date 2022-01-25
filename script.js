/* Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero */

// // FUNCTIONS 

const getRandomUniqueNumber = (min, max, tot) => {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const numbers = []; 
    while (numbers.length < tot) {
        const randomNumber = getRandomNumber(min, max);
        if (!numbers.includes(randomNumber)) numbers.push(randomNumber);
    }
    return numbers;
}

// ° Creo array numeri computer

const min = 1;
const max = 100; 
const total = 5;

const numbers = getRandomUniqueNumber(min, max, total);
console.log(numbers);

alert(numbers); 

setTimeout(() => {
    const userNumbers = []; 
    const correctNumbers = []; 

    while(userNumbers.length < total){
        let userGuess = parseInt(prompt(`Inserisci un numero da ${min} a ${max}`));
        // TODO VALIDATION che sia un numero valido
        
        userNumbers.push(userGuess); 
        if (numbers.includes(userGuess)) correctNumbers.push(userGuess);
    }

    let message = 'Non hai indovinato nessun numero'; 

    if (correctNumbers.length) {
        message = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers}`;
    }

    alert(message);

}, 3000);





