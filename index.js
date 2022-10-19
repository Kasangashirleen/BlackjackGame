let cards = [];
let sum = 0;
let message = "";
let hasBlackjack = false;
let isAlive = false;
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");


function startGame(){
    isAlive = true;
    let card1 = randomCards();
    let card2 = randomCards();
    cards = [card1, card2]
    sum = card1 + card2;
    renderGame()
}

function randomCards(){
    let num = Math.floor(Math.random() * 13) + 1
    if(num === 1){
        return 11;
    }else if(num > 10){
        return 10;
    }else{
        return num;
    }
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
        sumEl.textContent = `Sum: ${sum}`
    }


    if(sum < 21){
        message = "Do you want to draw a new card?";
    }else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackjack = true;
    }else{
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent=message;
}

function newCard(){
    if(hasBlackjack === false && isAlive === true){
        let card = randomCards();
        sum += card;
        cards.push(card)
        renderGame()
    }
}