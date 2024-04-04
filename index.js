// Code your solutions in this file
const names = ['Guadalupe', 'Ollie', 'Aki'];
const eventName = 'surprise';

function writeCards(name, eventName){
    let thankYouMessages = [];
    for(let i = 0; i < name.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
}


function countDown(number){
    
    for(let i = number; i >= 0; i--){
        console.log(i)
    }
    return number;
}

