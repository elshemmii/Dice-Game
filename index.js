//Generating random dice for player 1 

var randomNumber1 = Math.floor(Math.random()*6) + 1; // generates no. between 1-6

var randomDiceImage = "dice"+ randomNumber1 +".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0]; //selecting first img

image1.setAttribute("src",randomImageSource);

//Generating random dice for player 2

var randomNumber2 = Math.floor(Math.random()*6) + 1; // generates no. between 1-6

var randomDiceImage = "dice"+ randomNumber2 +".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // changing src attribute randomly

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource); //selecting scond img

//if player 1 won
if (randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML= "Player 1 Won !";

} //if player 2 won
else if (randomNumber2 > randomNumber1){

    document.querySelector("h1").innerHTML= "Player 2 Won !";

} // if it's DRAW
else {

    document.querySelector("h1").innerHTML= "Draw :(";

}