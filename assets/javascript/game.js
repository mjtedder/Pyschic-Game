var d = new Date();
document.body.innerHTML = ("<h1>Todays date is: " + d + "</h1>");

// PSEUDO CODE FOR PSYCHIC GAME
      //Create Array of Letters (var options = ["A", . . . ]) for user to choose from;
      //var computerChoice executes the function to choose a random letter;
          //-Computer chooses a random letter
          var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

          //create wins variable (var wins = 0);
          var wins = 0;
          //create losses variable (var losses = 0);
          var losses = 0;
          //Create guessesLeft variable (var guesses = 9);
          var guessesLeft = 9;

          var guessesSoFar [];

          var userGuess = null;


      //Capture userGuess onkeyup guess  (make sure to use .toLowerCase);

          document.onkeyup = function(event) {

            var userGuess = event.key.toLowerCase();

            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      //record letters (var guessesSoFar (event.onkey) chosen by UserGuess;

            var guessesSoFar = event.onkeyup
}






      //guessesLeft-- (i-1) to subtract a guess on a wrong answer;

      //Compare userGuess to Computerchoice  (if, else/if, else)
          //if userGuess = computerChoice, wins++
          //if userGuess doesn't equal computer choice, guessesLeft--
          //if guessesLeft reaches less than 1 and doesn't match computerChoice add +1 to losses (losses++)

          //when wins++ or losses++
          //reset guessesLeft back to 9
          //reset guessSoFar back to emptyArray
          //execute computerChoice again on the reset  -->
