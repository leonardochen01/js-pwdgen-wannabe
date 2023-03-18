/*
uso const (valore) per dare un valore fisso a nome, cognome e colore
uso console.log per controllare che funzioni
*/ 

const nome = prompt("Qual'è il tuo nome?")

const cognome = prompt("Ed il tuo cognome?")

const colore = prompt("Colore preferito?")

console.log(nome , cognome , colore)

/* 
non riuscivo a usare document.write, quindi sono giunto a questa soluzione
*/

let output = document.getElementById("password").innerHTML = `Ciao ${nome}, questa è la tua password sicurissima: ${nome}${cognome}${colore}${Math.floor(Math.random() * 100)}`;

/*Ho aggiunto un generatore randomico di numeri per rendere ancora più sicura la password*/