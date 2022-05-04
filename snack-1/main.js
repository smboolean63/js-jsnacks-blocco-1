// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
// 1. chiedo all'utente di inserire due numeri
const firstNumber = Number(prompt("Inserisci il primo numero"));
const secondNumber = Number(prompt("Inserisci il secondo numero"));
// 2. SE firstNumber > secondNumber stampo firstNumber
//    ALTRIMENTI SE secondNumber > firstNumber stampo secondNumber
//    ALTRIMENTI i numeri sono uguali
if(firstNumber > secondNumber) {
    console.log(firstNumber);
} else if(secondNumber > firstNumber) {
    console.log(secondNumber);
} else {
    console.log("Sono uguali")
}