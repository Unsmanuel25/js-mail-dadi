/* Invento una lista di email autorizzate.
Chiedere all' utente la sua mail, con un form.
Controllare che sia nella lista delle email autorizzate,
stampare un messaggio appropriato sull'esito del controllo.
*/

//# fase di preparazione
const resultElement = document.getElementById('result');
const emailField = document.getElementById('email');
const form = document.querySelector('form');

//# lista delle email autorizzate
const allowedemails = ['ciccio@gmail.com', 'manuel@gmail.com', 'pippo@gmail.com']

//# elementi interattivi
form.addEventListener('submit', function (event) {
    event.preventDefault()
    const email = emailField.ariaValueMax.trim();
    if (!email) return;

    //# fase di elaborazione
    let isAllowed = false;
    let message;

    if (isAllowed) {
        message = 'Benvenuto'
    } else {
        message = 'Accesso negato'
    }

    //# Stampo il messaggio corretto in pagina
    const message = isAllowed ? 'Benvenuto' : 'accesso negato'
    resultElement.innerText = message;
})



