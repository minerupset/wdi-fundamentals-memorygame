let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

let cardsInPlay = [];

function checkForMatch() {
  cardsInPlay[0] === cardsInPlay[1]
    ? alert("You found a match!")
    : alert("Sorry, try again");
}

function flipCard(cardId) {
  let currentCard = cards[cardId];
  cardsInPlay.push(currentCard.rank);

  console.log(`User flipped ${currentCard.rank} of ${currentCard.suit}`);
  console.log(currentCard.cardImage);

  if (cardsInPlay.length === 2) {
    checkForMatch();
    cardsInPlay = [];
  }
}

// flipCard(0);
// flipCard(2);

flipCard(0);
flipCard(1);
