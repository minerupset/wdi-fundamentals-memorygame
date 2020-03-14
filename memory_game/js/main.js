let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

function checkForMatch() {
  cardsInPlay[0] === cardsInPlay[1]
    ? alert("You found a match!")
    : alert("Sorry, try again");
}

function flipCard(cardId) {
  let currentCard = cards[cardId];
  cardsInPlay.push(currentCard);

  console.log(`User flipped ${cards[cardId]}`);

  if (cardsInPlay.length === 2) {
    checkForMatch();
    cardsInPlay = [];
  }
}

flipCard(0);
flipCard(2);

flipCard(0);
flipCard(1);
