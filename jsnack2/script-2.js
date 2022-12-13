/*SNACK 2
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
l’utente inserisce il suo nome tramite un input.
Comunicagli se può partecipare o no alla festa.*/

const userName = document.getElementById('user-name')

const messageArea = document.getElementById('final-message')

const button = document.getElementById('button')

const guests = ['Topolino', 'Pippo', 'Paperino', 'Sergio Mattarella']

button.addEventListener('click', function(){
    
    messageArea.innerText = ''
    
    let isGuest = false

    for (let i = 0; i < guests.length && !isGuest; i++){

        if (userName.value === guests[i]){
            isGuest = true
        }
    }

    let finalMessage

    if (isGuest) {
        finalMessage = 'Puoi entrare.'
    } else {
        finalMessage = 'Mi dispiace, non sei in lista.'
    }

    messageArea.innerText = finalMessage
})
