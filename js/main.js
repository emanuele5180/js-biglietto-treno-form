//l'inserimento del nome del passeggero, dei chilometri che vuole percorrere e la selezione di una categoria (over65, minorenne, maggiorenne).
var nomePasseggero = document.getElementById('nome');
var kmDaPercorrere = document.getElementById('kmdapercorrere');
var categoria = document.getElementById('categoria');

//calcolo il prezzo del viaggio
var costo = kmDaPercorrere * 0.21;

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//var scontoMinorenni = ((costo * 20) / 100);

//va applicato uno sconto del 40% per gli over 65.
//var scontoOver65 = ((costo*40) / 100);

//calcolo il prezzo totale del viaggio

if (scontoMinorenni) {
  var scontoMinorenni = ((costo * 20) / 100);

}

else if (scontoOver65) {
  var scontoOver65 = ((costo*40) / 100);

}

else (costo) {
  var costo = kmDaPercorrere * 0.21;

}
console.log (costo) ;
