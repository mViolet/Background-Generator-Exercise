var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
	body.style.background = 	
	"linear-gradient(to right, " 
	+ color1.value	+ ", " 
	+ color2.value
	+ ")";
	css.textContent = body.style.background + ";";
	console.log(color1.value);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function() {
	//create number vars
	var num1 = generateNumber();
	var num2 = generateNumber();
	var num3 = generateNumber();
	var num4 = generateNumber();
	var num5 = generateNumber();
	var num6 = generateNumber();

	//put number vars into background colors
	body.style.background = 	
	"linear-gradient(to right, rgb("
	+ Number(num1) + "," + Number(num2) + "," + Number(num3) + "), rgb("
	+ Number(num4) + "," + Number(num5) + "," + Number(num6) + ")";
	css.textContent = body.style.background + ";";

	//create function to make random numbers
	function generateNumber() {
	//set min and max
	var min = 0;
	var max = 256;
	//set random number
	var num = Math.floor(Math.random()*(+max - +min)) + +min;
	//return number's value
	return num;
	}
})

setGradient();

