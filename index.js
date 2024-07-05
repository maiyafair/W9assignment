let deck = []; // creating arrays for suits and values
let suits = ['Clubs', 'Hearts', 'Spades', 'Diamonds']; //brackets creating an array to store and access elements used for card game
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

for (const suit of suits) { // creating a loop to run through each element
    for (const value of values) {
        deck.push(`${value} of ${suit}`);//.push is a built in method to give task to an array
    }
}

deck.sort(() => Math.random() - 0.5); // .sort to shuffle deck and 0.5 to split the deck. Alternatives to this could be Math.random() - Math.random()

const player1Cards = deck.slice(0, 26); //splitting the deck between players
const player2Cards = deck.slice(0, 26); //0 is used to shuffle out deck from 0 up to 26 cards

let player1Score = 0;
let player2Score = 0;

for (let i = 0; i < 26; i++) { // ++ incremenet operator to increase numeric value starting at current value
    const player1Card = player1Cards[i]; //playercards assigned value of i for code to pull a radom card 
    const player2Card = player2Cards[i];

    const value1 = values.indexOf(player1Card.split(' ')[0]); //value.indexOf looks at all possible card value in array
    const value2 = values.indexOf(player2Card.split(' ')[0]);

    if (value1 > value2) { //creating an if else is true
        console.log('Player1 wins round');
    } else if (value2 > value1) {
        console.log('Player2 wins round');
    } else {
        console.log('Tie!');
    }




}
console.log('Player 1 score:', player1Score);
console.log('Player 2 score:', player2Score); //printing results 