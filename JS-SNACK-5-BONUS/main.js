/* SNACK 5
Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.*/


const arrayFormazioneTeamPrincipal = ["portiere", "difensore", "difensore", "difensore", "difensore", "centrocampista", "centrocampista", "centrocampista", "centrocampista", "attaccante", "attaccante"];
const arrayFormazioneSupport = ["portiere", "difensore", "difensore", "difensore", "difensore", "centrocampista", "centrocampista", "centrocampista"];

let ruolo = "";
let differenza;

if (arrayFormazioneTeamPrincipal.length > arrayFormazioneSupport.length) {
    differenza = (arrayFormazioneTeamPrincipal.length - arrayFormazioneSupport.length);
    for (let i = 0; i < differenza; i++) {
        ruolo = prompt("Inserisci un ruolo")
        arrayFormazioneSupport.push(ruolo) 
    }
    console.log(`Abbiamo aggiunto ${differenza} elementi all'array più vuoto.`);
    console.log(arrayFormazioneSupport);
    console.log(`Ora i due Array contengono lo stesso numero di elementi`);
    console.log(arrayFormazioneTeamPrincipal);
} else if (arrayFormazioneSupport.length > arrayFormazioneTeamPrincipal.length) {
    for (let i = 0; i < differenza; i++) {
        ruolo = prompt("Inserisci un ruolo")
        arrayFormazioneTeamPrincipal.push(ruolo)
        
    }
    console.log(`Abbiamo aggiunto ${differenza} elementi all'array più vuoto.`);
    console.log(arrayFormazioneTeamPrincipal);
    console.log(`Ora i due Array contengono lo stesso numero di elementi`);
    console.log(arrayFormazioneSupport);
}







