/* SNACK 4
Crea un array di numeri interi e fai la somma di tutti gli elementi 
che sono in posizione dispari.*/


const arrayNumeriInteri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let somma = 0; 
let elementNumber;

for (let i = 0; i < arrayNumeriInteri.length; i++) {
    let modulo = i % 2; 
    if (modulo != 0) {
        elementNumber = arrayNumeriInteri[i];
        somma += elementNumber;
        console.log(elementNumber);
    }
}

console.log(`La somma dei numeri selezionati è: ${somma}`);