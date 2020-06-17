//l'inserimento del nome del passeggero, dei chilometri che vuole percorrere e la selezione di una categoria (over65, minorenne, maggiorenne).
var submit = document.getElementById('submit');

submit .addEventListener ( "click", function () {
var nomePasseggero = document.getElementById('nome').value;
var kmDaPercorrere = document.getElementById('kmdapercorrere').value;
var categoria = document.getElementById('categoria').value;

//calcolo il prezzo del viaggio
var costo = kmDaPercorrere * 0.21;

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//calcolo il prezzo totale del viaggio

if (categoria == 'minorenne') {
  var scontoMinorenni = ((costo * 20) / 100);
  costo = costo - scontoMinorenni;

}else if (categoria == 'over65') {
  var scontoOver65 = ((costo*40) / 100);
  costo = costo - scontoOver65;
}else {
  var costo = kmDaPercorrere * 0.21;
}



console.log (costo) ;
})
