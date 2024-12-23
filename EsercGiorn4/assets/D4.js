/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2){
   return l1 * l2
}

let risultato = area(5, 10);
console.log("L'area del rettangolo è: " + risultato);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

 function crazySum(x, y){
    
   if(x === y){
    return (x +y) *3;
   }
   else{
    return x + y
   }
 }
 
 console.log(6, 8)
 
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num){
    let diff = Math.abs(num - 19);
    if( num > 19){
        return diff * 3;

    }
     else{
        return diff;
     }
}
console.log(crazyDiff(20));


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if(n > 20 && n < 100 || n === 400){
        return true
    }
}
console.log(boundary(50))


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str){
    if(str.startsWith("EPICODE")){
        return str;
    }
     else{
        return "EPICODE" + str;
     }
}
console.log( "EPICODE é una scuola di preogrammazione.");




/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num4){
    if(num4 <= 0){
        return "Inserisci un numero positivo";
    }
    return num4 % 3 === 0 || num4 % 7 === 0;

}
console.log(check3and7(21)); 



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str1){
    return str1.split("").reverse().join("")
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str3){
    return str3
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

}
console.log(upperFirst("ciao mondo di epicode")); 


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str4){
    return str4.slice(1, -1)

}
console.log(cutString("ciao belli"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(num7){
    let randomNumbers = [];
    for(let i = 0; i < num7; i++){
        randomNumbers.push(Math.floor(Math.random() * 11));
    }
   return randomNumbers
}
console.log(giveMeRandom(10))
