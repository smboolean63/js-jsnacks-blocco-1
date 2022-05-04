// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
let total = 0;

for (let i = 0; i < 10; i++) {
    // chiedo un numero
    const number = Number(prompt("Inserisci un numero"));
    // e lo sommo total = total + numer;
    total += number;
}
// stampo il totale
console.log(total);