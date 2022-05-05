// Crea due array che hanno un numero di elementi diversi.
const arrayOne = [];
const arrayTwo = [];

const arrayOneLength = Math.floor(Math.random() * 20) + 1;
const arrayTwoLength = Math.floor(Math.random() * 20) + 1;

for( let i = 0; i < arrayOneLength; i++ ) {
    arrayOne.push(Math.floor(Math.random() * 100));
}
for( let i = 0; i < arrayTwoLength; i++ ) {
    arrayTwo.push(Math.floor(Math.random() * 100));
}
console.log(arrayOne, arrayTwo);

// arrayShorter
// let arrayShorter;
// let offset = 0;
// // SE arrayOne.length > arrayTwo.length = arrayTwo più corto arrayShorter = arrayTwo
// // ALTRIMENTI SE  arrayTwo.length > arrayOne.length  = arrayOne più corto arrayShorter = arrayOne
// // ALTRIMENTI stampo gli array sono uguali
// // arrayShorter che è la copia dell'array più corto
// if( arrayOne.length > arrayTwo.length ) {
//     arrayShorter = arrayTwo;
//     offset = arrayOne.length - arrayShorter.length;
// } else if ( arrayTwo.length > arrayOne.length ) {
//     arrayShorter = arrayOne;
//     offset = arrayTwo.length - arrayShorter.length;
// } else {
//     alert("I due array hanno la stessa lunghezza!");
// }
// // Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.
// for(let i = 0; i < offset; i++) {
//     arrayShorter.push(Math.floor(Math.random() * 100) + 1);
// }
// console.log(arrayShorter);
while( arrayOne.length !== arrayTwo.length ) {
    if( arrayOne.length < arrayTwo.length ) {
        arrayOne.push(Math.floor(Math.random() * 100) + 1);
    } else {
        arrayTwo.push(Math.floor(Math.random() * 100) + 1);
    }
}

console.log(arrayOne, arrayTwo);