var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var diceName = "dice" + randomNumber1 + ".png"; //dice1
var imgSource = "./images/" + diceName;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", imgSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6



var imgSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imgSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = 'player 1 Wins';
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "player 2 wins";
}
else {
  document.querySelector('h1').innerHTML = 'draw Try Again'
}