/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 10
let numero2 = 20
if(numero2<numero1){
  console.log("il 20 è piu grande")
}
else{
  console.log("il numero 10 è più piccolo")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero3 = 5
if(numero3===6){
  console.log("equal")
}
  else{
    console.log("not equal")
  }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero4 = 20
if(numero4 % 5===0){
  console.log("divisibile")
}
else{
  console.log("non divisibile")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero8 = 30
let numero7 = 8
if(numero8 ===8|| numero8+numero7===8){
  console.log("è maggiore di 8")
}
else if(numero7===8){
  console.log("è guale al numero 8")
}
else{
  console.log("non è uguale a 8")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60;
let costoSpedizione = 10;
let totalCheckout;

if(totalShoppingCart > 50){
  console.log("spedizione gratuita");
  totalCheckout = totalShoppingCart
}
else {
  console.log("spedizione applicata");
  totalCheckout = totalShoppingCart + costoSpedizione;

}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart1 = 60;
let costoSpedizione1 = 10;
let totalCheckout1;
let sconto= 0.20
let totalSconto = totalShoppingCart1 - (totalShoppingCart1 * sconto)


if(totalShoppingCart1 > 50){
  console.log("spedizione gratuita");
  totaleCheckout1 = totalSconto
}
else {
  console.log("spedizione applicata");
  totalCheckout1 = totalSconto + costoSpedizione1;

}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 15;
let num2 = 8;
let num3 = 22;

let ordinati;
if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
      ordinati = [num1, num2, num3];
  } else {
      ordinati = [num1, num3, num2];
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
      ordinati = [num2, num1, num3];
  } else {
      ordinati = [num2, num3, num1];
  }
} else {
  if (num1 >= num2) {
      ordinati = [num3, num1, num2];
  } else {
      ordinati = [num3, num2, num1];
  }
}
console.log(ordinati)



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore = 45
if (typeof valore === "number"){
  console.log("il valore è un numero");
}
else{
  console.log("il valore non è un numero")
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero9 = 12
if(numero9 % 2===0){
  console.log("il numero è pari")
}
else {
  console.log("il numero è dispari")
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */


/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


delete me.skills
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeri = [1,2,3,4,5,6,7,8,9,10];
console.log(numeri)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri.splice(9,1,100)
console.log(numeri)