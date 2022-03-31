/* SNACK 2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.*/


let controllo_pari, numero_utente;

numero_utente = parseInt(prompt("Inerisci un numero"));

    if (isNaN(numero_utente)) {
        alert("Non hai inserito valori numerici")
    } 

    if (numero_utente % 2 == 0) {
        console.log(`Il numero inserito è pari: ${numero_utente}`);
    } else {
        console.log(`Il numero ${numero_utente} inserito è dispari, forse è meglio il numero ${numero_utente + 1} che è pari`);
    }



