let player = {
  name: "Guest",
  chips: 145,
};
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = " ";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  let firstcard = getRandomCard();
  let secondcard = getRandomCard();
  cards = [firstcard, secondcard];
  sum = firstcard + secondcard;
  renderGame();
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 11) + 1;
  return randomCard;
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    if (i === 0) {
      cardsEl.textContent += cards[i];
    } else {
      cardsEl.textContent += ", " + cards[i];
    }
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackjack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive == true && hasBlackjack == false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(thirdCard);
    renderGame();
  }
}
