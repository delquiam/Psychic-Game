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

printOnScreen();


document.onkeyup = function (event) {

    var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
    //Store Try into variable followed by
    userGuesses.push(keyPressed);

    


    if (keyPressed === luckyLetter) {
        wins++;
        guessesLeft = 0;
        printOnScreen();
        reset();  
        alert("You won!");

        
    }

    if (guessesLeft <=0) {
        losses++;
        guessesLeft=0;
        printOnScreen();
        reset();
        alert("You lost!");
    }

    //track guessesLeft??
    //store results in counter variables
    //display results to the browser solution.  create a var to store a string interspersed with data from results.  display the data using queryselector.
    
    printOnScreen();
    guessesLeft--;

    
   

    
}

function printOnScreen(){
    var winner = document.getElementById("wins");
    var loser = document.getElementById("losses");
    var remaining = document.getElementById("guessesLeft");
    var guessed = document.getElementById("guesses");
    winner.innerHTML = wins;
    loser.innerHTML = losses;
    remaining.innerHTML = guessesLeft;
    guessed.innerHTML =  userGuesses.join(',');
}

function reset(){
    //wins=0;
    //losses=0;
    
    guessesLeft=10;
    userGuesses=[];
}






















