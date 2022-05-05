// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
// 1. creo un array e creo una varibile total che conterrà alla fine del ciclo la somma degli elementi di indice dispari dell'array 
const numbers= [1, 10, 1, 10, 1, 10];
let total = 0; // mi aspetto 30
// 2. ciclo for i = 0 e i < array.length | i sarà l'indice
for(let i = 0; i < numbers.length; i++) {
    // 3. SE i % 2 === 1
    //      sommo il valore di array[i] a total
    if(i % 2 === 1) {
        // total = total + numbers[i];
        total += numbers[i];
    }
}

// 4. total che contiene numero >= 0 | stampo il valore di total
console.log(total);