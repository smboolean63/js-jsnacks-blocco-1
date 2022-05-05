// Crea due array che hanno un numero di elementi diversi.
const arrayOne = [1,2,3,4,5];
const arrayTwo = [6,7,8,9,10,11,12,13,14,15];
// arrayShorter
let arrayShorter;
let offset = 0;
// SE arrayOne.length > arrayTwo.length = arrayTwo più corto arrayShorter = arrayTwo
// ALTRIMENTI SE  arrayTwo.length > arrayOne.length  = arrayOne più corto arrayShorter = arrayOne
// ALTRIMENTI stampo gli array sono uguali
// arrayShorter che è la copia dell'array più corto
if( arrayOne.length > arrayTwo.length ) {
    arrayShorter = arrayTwo;
    offset = arrayOne.length - arrayShorter.length;
} else if ( arrayTwo.length > arrayOne.length ) {
    arrayShorter = arrayOne;
    offset = arrayTwo.length - arrayShorter.length;
} else {
    alert("I due array hanno la stessa lunghezza!");
}
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.
for(let i = 0; i < offset; i++) {
    arrayShorter.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arrayShorter);