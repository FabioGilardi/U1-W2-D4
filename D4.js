/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1 = 1, l2 = 1) {
  return l1 * l2;
};

console.log(area(5, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (a1, a2) {
  if (a1 !== a2) {
    return a1 + a2;
  } else return (a1 + a2) * 3;
};

console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n1) {
  if (n1 > 19) {
    return (n1 - 19) * 3;
  } else return 19 - n1;
};

console.log(crazyDiff(21));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else return false;
};

console.log(boundary(1));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (epicodeString) {
  const epiArray = epicodeString.split(" ");
  if (epiArray[0] !== "EPICODE") {
    epiArray.unshift("EPICODE");
  }
  return epiArray.join(" ");
};

console.log(epify("<== inserito dalla funzione"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (pn) {
  if (pn >= 0) {
    if (pn % 3 === 0 || pn % 7 === 0) {
      return "il numero è divisibile";
    } else return "non è divisibile nè per 3 nè per 7";
  } else return "devi inserire un numero positivo";
};

console.log(check3and7(22));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (revSentence) {
  const revArray = revSentence.split("");
  const finalArray = [];
  for (let i = 0; i < revArray.length; i++) {
    finalArray.unshift(revArray[i]);
  }
  return finalArray.join("");
};

console.log(reverseString("ciao tutto bene?"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (upSentence) {
  const upArray = upSentence.toLowerCase().split(" ");
  for (i = 0; i < upArray.length; i++) {
    upArray[i] = upArray[i].charAt(0).toUpperCase() + upArray[i].substring(1);
  }
  return upArray.join(" ");
};

console.log(upperFirst("la prima LETTERA rimane SEMPRE maiUScola"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (string) {
  const cutArray = string.split("");
  for (let i = 0; i < cutArray.length; i++) {
    if (i === 0 || i === cutArray.length - 1) {
      cutArray[i] = cutArray[i].slice(1);
    }
  }

  return cutArray.join("");
};

console.log(cutString("Taglia la prima e l'ultima lettera"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (rn) {
  randomArray = [];
  for (let i = 0; i < rn; i++) {
    randomArray[i] = Math.floor(Math.random() * 11);
  }
  return randomArray;
};

console.log(giveMeRandom(7));
