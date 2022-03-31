/* SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */



let somma, numero_utente, somma_while;

somma = 0;
somma_while = 0;

for (let i = 1; i <= 5; i++) {
    numero_utente = parseInt(prompt(`Inerisci il ${i} numero`));
    somma = somma + numero_utente;
    
}

console.log(`La somma di tutti i numeri inseriti è: ${somma}`);


// Con il ciclo while 
let  j= 1;

while (j <= 5) {
    numero_utente = parseInt(prompt(`Inerisci il ${j} numero`));
    somma_while = somma_while + numero_utente;
    j++;
}

console.log(`La somma di tutti i numeri inseriti è: ${somma_while}`);