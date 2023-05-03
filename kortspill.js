const suits = ['S', 'K', 'H', 'R'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {
  const deck = [];
  for(let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) { 
      deck.push(ranks[j] + suits[i]);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

const deck = createDeck();
shuffleDeck(deck);
console.log(deck);

const userCard = '5K';
const computerCard = deck[Math.floor(Math.random() * 52)];


console.log(userCard);
console.log(computerCard)

const cardValues = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14
};

const userValue = cardValues[userCard.slice(0, -1)];
const computerValue = cardValues[computerCard.slice(0, -1)];


if (userValue > computerValue) {
  console.log('User wins!');
} else if (userValue < computerValue) {
  console.log('Computer wins!');
} else {
  console.log('It\'s a tie!');
}