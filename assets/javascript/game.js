 
// variables

var wins=0;
var loss=0;
var guessLeft=9;
var userGuess; // stores users guess 
var guessSofar = []; // Stores our guesses as we type


// computer selection
var selection =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",                  "v", "w", "x", "y", "z"];

 /// creating a reset. This enables the app to select a new letter


var comSelect = selection[Math.floor(Math.random()*selection.length)];

function reset() {

    comSelect = selection[Math.floor(Math.random()*selection.length)]; // resets app to pick new letter
    guessLeft =9;
    guessSofar = []; // empty array. 
        
};

//user selection

document.onkeyup = function(event){
    
     userGuess =String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);

    guessSofar.push(userGuess); // stores each of our guesses in an array

     // compare the letters

    if (userGuess === comSelect){
        wins++; 
        reset();
    
    } else  {
        guessLeft--;
    }

    // guessLeft is 0, make loss go up by 1

    if( guessLeft === 0){
        reset();
        loss++;
    }

    var text = "<p>Guess what letter I'm thinking of "+
                "<p> Wins: "+wins+ "</p>"+
                "<p> Losses: "+loss+ "</p>"+
                "<p> Guesses Left: "+guessLeft+ "</p>"+
                "<p> Your guess so far: "+guessSofar+ "</p>" ;

    document.querySelector("#demo").innerHTML=text;
 };

   
    