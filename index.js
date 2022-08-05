
//First player setting
const randomNumber1 = Math.floor(Math.random() * 6) + 1; 
// returns a random number 1 to 6

const randomImage = "dice" + randomNumber1 + ".png";
// string dice1.png - dice6.png

const randomImageSrc = "images/" + randomImage;

const player1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc);

//Second player setting
const randomNumber2 = Math.floor(Math.random() * 6) + 1; 

const randomImage2 = "dice" + randomNumber2 + ".png";

const randomImageSrc2 = "images/" + randomImage2;

const player2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);


// title change depend on winner

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🥂 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = " Player 2 wins! 🥂";
} else {
    document.querySelector("h1").innerHTML = " Draw!";

}