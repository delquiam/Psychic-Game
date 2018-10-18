//How to obtain user input?
//Get user input using keypress
document.onkeyup = (function (event) {
    //Create variables
    var randomLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var userGuesses = [];

    var userGuesses = event.key;

    //Have computer randomly choose a letter for player to guess

    var luckyLetter = randomLetter[Math.floor(Math.random() * randomLetter.length)];
    console.log(luckyLetter);

    //have player choose a random letter
    //have 10 guesses 
    //compare userGuesses to random letter and determine results using conditional statements

    //do i use a loop?
    if (userGuesses === randomLetter) {
        wins++;
    } else {
        losses++;
    }

    //track guessesLeft??
    //store results in counter variables
    //display results to the browser solution.  create a var to store a string interspersed with datea from results.  display the data using queryselector.

    document.querySelector("guess").innerHTML=html;

    var html=
    "<p> wins:  " + wins + " </p>" +
    "<p> wins:  " + losses + " </p>" +;

}


















