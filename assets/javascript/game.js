// Tester Code
//var d = new Date();
//document.body.innerHTML = ("<h1>Todays date is: " + d + "</h1>");

// Define an array of alphabet letters that computer can choose from
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Set wins, losses, and guesses left variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// Set array that will hold the user's guesses in each round of gameplay
var guessesSoFar = [];
// Sets a variable for what the user picks by pressing a key
var userGuess = null;
// Sets an array that has the computer randomly pick a letter and store it
var letterToBeGuessed = computerOptions[Math.floor(Math.random) * computerOptions.length];
// Listens for key stroke events
document.onkeyup = function(event) {




  // When user presses a key, it records it and saves to userGuess variable
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


  // IF the userGuess is not in the index of guessesSoFar array
  // AND userGuess is a letter of the alphabet(computerOptions array)
  //THEN add the userGuess to guessesSoFar array.
  if (guessesSoFar.indexOf(userGuess) < 0 && computerOptions.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length] = userGuess;

    // if it is a letter not yet guessed then decrease remaining guesses by 1
    guessesLeft--;
  }

  // IF letterToBeGuessed is the same as userGuess..
  if (letterToBeGuessed == userGuess) {
    //Then add 1 to wins variable
    wins++;
    //Reset guessesLeft to 9
    guessesLeft = 9;
    //And empty the guessesSoFar array
    guessesSoFar = [];
    // ALSO have the computer randomly pick a new letter for the user to guess
    letterToBeGuessed = computerOptions[Math.floor(Math.random) * computerOptions.length];
  }

  // IF guessesLeft gets to 0..

  // AlSO have the computer randomly pick a new letter for user to guess
  if (guessesLeft == 0) {
    //Then add 1 to losses variable
    losses++;
    //Reset guessesLeft to 9
    guessesLeft = 9;
    //And empty the guessesSoFar array
    guessesSoFar = [];
    //ALSO have the computer randomly pick a new letter for the user to guess
    lettertoBeGuessed = computerOptions[Math.floor(Math.random) * computerOptions.length];
  }

  // Creating a variable to display the game progress to HTML

  var html =
    "<h1>The Pyschic Game</h1><br>" +
    "<h3>Guess what letter I'm thinking of</h3><br>" +
    "<h3>Wins: " + wins + "</h3><br>" +
    "<h3>Losses: " + losses + "</h3><br>" +
    "<h3>Guesses Left: " + guessesLeft + "</h3><br>" +
    "<h3>Your Guesses so far: " + guessesSoFar + "</h3><br>";


  //Place html into the game ID Div
  document.querySelector("#game").innerHTML = html;
}
