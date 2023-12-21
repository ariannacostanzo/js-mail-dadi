/* ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato */ 

//Raccolgo tutti gli elementi che mi servono
// const startDiceButton = document.getElementById('dadi-start');
// const myNumberText = document.getElementById('my-number-text');
// const cpuNumberText = document.getElementById('cpu-number-text');
// const winner = document.getElementById('winner');
// const youWin = document.getElementById('you-win');
// const cpuWin = document.getElementById('cpu-win');

// startDiceButton.addEventListener('click', function(){
//     //creo numeri casuali da 1 a 6 per user e cpu e li stampo in pagina
//     const myNumber = Math.floor(Math.random() * (6 + 1 - 1)) + 1;

//     myNumberText.innerHTML = `Hai tirato: <strong>${myNumber}<strong>`;

//     const cpuNumber = Math.floor(Math.random() * (6 + 1 - 1)) + 1;

//     cpuNumberText.innerHTML = `CPU ha tirato: <strong>${cpuNumber}<strong>`;

//     //Logica del vincitore

//     let winnerText = ''

//     if (myNumber > cpuNumber) {
//         winnerText = 'Hai vinto!';
//         youWin.classList.remove('d-none');
//         cpuWin.classList.add('d-none');
//     }   else if (myNumber < cpuNumber) {
//         winnerText = 'Ha vinto la cpu!';
//         youWin.classList.add('d-none');
//         cpuWin.classList.remove('d-none');
//     } else {
//         winnerText= 'Pari!';
//         youWin.classList.add('d-none');
//         cpuWin.classList.add('d-none');
//     }

//     winner.innerText = winnerText;

// });






/* ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che la mail inserita sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */ 


//Recupero gli elementi che mi servono
const userEmailElement = document.getElementById('email-address');
const accessButton = document.getElementById('accedi');

// Lista di email autorizzate
const emails = [
    'pincopallinojoe@outlook.it',
    'nonsainientejonsnow@outlook.it',
];


accessButton.addEventListener('click', function() {

    const userEmail = userEmailElement.value;

    if (!userEmail) {
        console.log('inserisci qualcosa'); 
        return;
    }

    console.log('userEmail: ' + userEmail)

    for (let i = 0; i < emails.length; i++) {
        const authorizedEmail = emails[i];
        console.log(`${i+1}° email autorizzata: ${authorizedEmail}`);
        
        if (userEmail !== authorizedEmail) {
            console.log('non è un email autorizzata')
        } else {
            console.log("è un'email autorizzata")
        }
    }





});

