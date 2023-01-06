var randomNumer1 = Math.random();
var value1 = Math.ceil(randomNumer1*6)
var diceValue1 = "dice" + value1 + ".png"
var randomImg1 = "images/"+diceValue1
document.querySelector(".img1").setAttribute("src", randomImg1)

var randomNumer2 = Math.random();
var value2 = Math.ceil(randomNumer2*6)
var diceValue2 = "dice" + value2 + ".png"
var randomImg2 = "images/"+diceValue2
document.querySelector(".img2").setAttribute("src", randomImg2)

if(value1===value2)
      document.querySelector("h1").innerHTML="Draw"
else if(value1>value2)
      document.querySelector("h1").innerHTML="Player 1 wins 🚩"
else
      document.querySelector("h1").innerHTML="Player 2 wins 🚩"
