var passcode = ~~(Math.random() *1000)
var tries = 10;

while(guess!= passcode && tries > 0)
{
    console.log("you have " + tries + " tries left.")
    console.log("Guess a number bettween 0 to 999");
    
    var guess = prompt("Enter a number (0-999)");
    
    tries -= 1;
    
    if(guess == passcode) {
        console.log("You won!")
        
    } else if (tries <= 0) {
        console.log("You Lost")
        
    } else giveClue()
    
}

function giveClue() {
    if (guess > passcode) {
        console.log("Too high")
    } else {
        console.log("Too low")
    }
}


console.log(" the number was " + passcode);