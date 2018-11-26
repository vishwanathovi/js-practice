// generating random hex number

function padding(number) {
	if (number.length==1){return "0"+ number}
		return number;
}



document.addEventListener('click',randomBackground)

function randomBackground(){

// Generating random Hex code

var randomRed = padding(Math.floor(Math.random()*256).toString(16));
var randomGreen = padding(Math.floor(Math.random()*256).toString(16));
var randomBlue = padding(Math.floor(Math.random()*256).toString(16));

var randomHex = "#" + randomRed + randomGreen + randomBlue;

// Assigning color to the background

document.body.style.backgroundColor = `${randomHex}`

console.log(randomHex)
}