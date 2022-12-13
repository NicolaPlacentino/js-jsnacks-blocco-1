/*SNACK 1
Il software deve chiedere per 10 volte all’utente di inserire un numero (qui potete usare un prompt). 
Il programma stampa la somma di tutti i numeri inseriti.*/

const sumElement = document.getElementById('final-sum')

const userNumbers = []

let sum = 0

isANumber = true

for (let i = 0; i < 10 && isANumber; i++){

    userNumbers.push(parseInt(prompt('Scrivi un numero', 2).trim()))

    if(isNaN(userNumbers[i])){
        isANumber = false

        alert('Puoi inserire solo valori numerici!')
    }

    sum += userNumbers[i]
    console.log(sum);
}

const finalMessage = 'La somma è: ' + sum

sumElement.innerText = finalMessage

