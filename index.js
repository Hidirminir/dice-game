var numberOf1 = Math.floor(Math.random() * 6) + 1;
var selectedNumber = "./images/dice" + numberOf1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", selectedNumber);

var numberOf2 = Math.floor(Math.random() * 6) + 1;
var selectedNumber2 = "./images/dice" + numberOf2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", selectedNumber2);

if (numberOf1 > numberOf2) {
  document.querySelectorAll("p")[0].innerHTML = "PLAYER 1 WON";
} else if (numberOf2 > numberOf1) {
  document.querySelectorAll("p")[0].innerHTML = "PLAYER 2 WON";
} else {
  document.querySelectorAll("p")[0].innerHTML = "DRAW";
}
