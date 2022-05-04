// Crea un array vuoto.
const oddsNumbers = [];

// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
for ( let i = 0; i < 6; i++ ) {
    // chiedo un numero
    const number = Number(prompt("Inserisci un numero"));
    // SE il numero è dispari lo aggiungo all'array
    if ( number % 2 === 1 ) {
        oddsNumbers.push(number);
    }
}
// stampo l'array
console.log(oddsNumbers);