// Build a BlackJack Game

// variables representing two cards 
let cards = [];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [];
    cards.push(firstCard);
    cards.push(secondCard);
}

function getRandomCard() {
    let randomNumber = parseInt(math.random() * 14);
    if (randomNumber == 1) {
        randomNumber = 11;
    }
    if (randomNumber > 9) {
        randomNumber = 10;
    }
    return randomNumber;
}

console.log(sum)
//chalenge #2 
// code the statements below based on the conditions shown in blackjack.png from the images folder
// your output should work in the browser's console based on changing the values assigned to the cards
if (sum == 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
}

else if (sum > 21) {
    message = "You're out of the game! 😭"
}
    
else {
    message = "Do you want to draw a new card? 🙂"
}
    
console.log(message)