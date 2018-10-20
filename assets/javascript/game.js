//How to obtain user input?
//Get user input using keypress

//Create variables
var randomLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuesses = [];

//Have computer randomly choose a letter for player to guess

var luckyLetter = randomLetter[Math.floor(Math.random() * randomLetter.length)];
console.log(luckyLetter);

//have player choose a random letter
//have 10 guesses 
//compare userGuesses to random letter and determine results using conditional statements

document.onkeyup = function (event) {
    var userGuesses = event.key;
    var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
    //Store Try into variable followed by
    userGuesses.push(keyPressed);

    if (userGuesses === luckyLetter) {
        wins++;
    } else {
        losses++;
    }

    //track guessesLeft??
    //store results in counter variables
    //display results to the browser solution.  create a var to store a string interspersed with datea from results.  display the data using queryselector.

    document.querySelector("userGuesses").innerHTML = "Your guesses so far: " + userGuesses.join('');
}





















