/*
Genero un numero random da 1 a 6, sia per il giocatore che per il computer./
Stabilire il vincitore in base al punteggio che esce
*/

//# fase di preparazione
const max = 6;
const resulElement = document.getElementById('result');

//# fase di raccolta dati
const player1Number = math.floor(Math.random() * 6) + 1;
const player2Number = math.floor(Math.random() * 6) + 1;

console.log('il giocatore 1 ha fatto:', player1Number)
console.log('il giocatore 2 ha fatto:', player2Number)

let message;

if (player1Number > player2Number) {
    message: 'ha vinto il giocatore 1';
} else if (player1Number < player2Number) {
    message: 'ha vinto il giocatore 2';
} else {
    message: 'Pareggio';
}

console.log(message)

//# fase di output
resultelement.innerHTML = `
<p>Il giocatore 1 ha fatto: ${player1Number}</p>
<p>Il giocatore 2 ha fatto: ${player2Number}</p>
<p>${player2Number}</p>
`;