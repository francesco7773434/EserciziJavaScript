/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Numeri:Serve per conservare numeri,  Può contenere sia numeri interi (come 5, 10, 100) che numeri con la virgola (come 4.5, 99.99).
   Stringhe:Se vuoi conservare nomi, frasi, o qualsiasi altra cosa fatta di lettere Si usano le virgolette (") o gli apostrofi (') per indicare che è una stringa.
   Boolean:Questa scatola serve a rispondere a domande con vero (true) o falso (false). Per esempio, "Hai fatto i compiti?" può avere due risposte: sì o no.
   Null:È una scatola vuota, ma vuota volutamente. Significa che non c'è niente al suo interno e lo sappiamo.
   Undefined:Quando crei una scatola ma non decidi cosa metterci, è undefined (cioè "non definita").
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 /*let myName= "francesco" 
 console.log(myName)
 */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let numero1= 12
  let numero2= 20
  let somma= numero1+numero2
  console.log(somma) 
  */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x=12
console.log(x)
*/
 

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

 /*const myName=orbello
  myName=rossi
  cosole.log(myName) */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let numero=4
   let x=12
   let sottrazione=x-numero
   console.log(sottrazione) 
*/
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1= "john";
   let name2="John" ;
   let isDifferent = name1 !== name2;
   console.log(isDifferent);

   let areEqualLowercase = name1.toLowerCase() === name2.toLowerCase(); 
console.log(areEqualLowercase);
