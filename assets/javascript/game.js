// Tester Code
//var d = new Date();
//document.body.innerHTML = ("<h1>Todays date is: " + d + "</h1>");

// Define alphabet letters that computer can pick from
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Set the initial global variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// guessesSoFar is an array that will hold all the user's guesses in each round
var guessesSoFar = [];
// userGuess is what the user picks by pressing a key
var userGuess = null;
// Have computer pick a letter and store it in letterToBeGuessed
var letterToBeGuessed = computerOptions[Math.floor(Math.random) * computerOptions.length];
// start listening for events
document.onkeyup = function(event) {




	// When user presses a key, it records it and saves to userGuess
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();



	// If the userGuess is not in the index of guessesSoFar
  // AND userGuess is a letter of the alphabet,
  //THEN add the userGuess to guessesSoFar array.

  if (guessesSoFar.indexOf(userGuess) < 0 && computerOptions.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length] = userGuess;

  // if it is a new letter then decrease remaining guesses by 1
    guessesLeft--;
  }

	// if letterToBeGuessed is same as userGuess then record it as a win
	// and then reset guessesLeft to 9, and empty the guessesSoFar array
	// also have the computer make a new random pick
  if (letterToBeGuessed == userGuess){
    wins++;
    console.log("You win!");
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = computerOptions[Math.floor(Math.random) * computerOptions.length];
  }

	// if guessesLeft gets to 0 then record it as a loss
	// and then reset guessesLeft to 9, and empty the guessesSoFar array
	// also have the computer make a new random pick
  if (guessesLeft == 0) {
    losses++;
    guessesLeft = 9;
    guessesSoFar = [];
    lettertoBeGuessed = computerOptions[Math.floor(Math.random) * computerOptions.length];
  }

	// Displaying progress to HTML

  var html =
  "<h1>The Pyschic Game</h1><br>" +
  "<h3>Guess what letter I'm thinking of</h3><br>" +
  "<h3>Wins: " + wins + "</h3><br>" +
  "<h3>Losses: " + losses + "</h3><br>" +
  "<h3>Guesses Left: " + guessesLeft + "</h3><br>" +
  "<h3>Your Guesses so far: " + guessesSoFar + "</h3><br>";


	// place html into the game ID
  document.querySelector("#game").innerHTML = html;
}
