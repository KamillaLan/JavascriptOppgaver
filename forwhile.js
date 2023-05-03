
for (let counter =5; counter < 11; counter++){
    console.log(counter);
}

for (let teller = 3; teller >=0; teller-- ) {
    console.log(teller);
}

const mat= ['fisk', 'spaghetti', 'suppe']
for (let i= 0; i < mat.length; i++){
    console.log(mat[i]);
}



    var suits = ['H', 'K', 'S', 'R'];
    var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    var deck =[];
    
    for(var suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (let rankCounter = 0; rankCounter < 13; rankCounter++) { 
       //console.log(ranks[j] + suits[i]); 
       deck.push(ranks[rankCounter] + suits[suitCounter]);
     }
    }
      console.log(deck);


const cards =['diamonds', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random()*4)]
    console.log(currentCard);
}

let milkNeeded =2;

let milkAdded = 0;

do {
    milkAdded++
    console.log(milkAdded)
} while (milkAdded < milkNeeded);