/* SNACK 3
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi 
e una lista di cognomi, e da queste vuole generare una falsa 
lista di invitati con nome e cognome.*/


const arrayNomi = new Array("nicolas", "mario", "pino", "gianni", "franco");
const arrayCognomi = new Array("rossi", "gialli", "verdi", "blu", "ciao");
let arrayListaInvitati = new Array();

for (let i = 0; i < arrayNomi.length; i++) {
    const elementNome = arrayNomi[i];

for (let i = 0; i < arrayCognomi.length; i++) {
    const elementCognome = arrayCognomi[i];
    arrayListaInvitati.push(elementNome + " " +  elementCognome)
}

}



console.log(arrayListaInvitati);

