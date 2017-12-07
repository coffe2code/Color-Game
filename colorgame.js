var number = 6;
var colors = generateRandomColors(number);

var squares=document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


easyBtn.addEventListener("click",function(){
	number=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors=generateRandomColors(number);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i =0; i<squares.length;i++)
		{if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display="none";
		}}
});
hardBtn.addEventListener("click",function(){
	number=6;
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
colors=generateRandomColors(number);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i =0; i<squares.length;i++)
		{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
});

resetButton.addEventListener("click",function(){
	h1.style.backgroundColor="steelblue"
	//generate all new colors
	colors = generateRandomColors(number);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colors of squares
	colorDisplay.textContent =pickedColor
	messageDisplay.textContent="";
	for(var i=0; i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
})

colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{	//add initial colors
	squares[i].style.backgroundColor=colors[i];

	//add click listeners
	squares[i].addEventListener("click",function(){
		//grab color of picked square
		var pickedsquare=this.style.backgroundColor;
		//compare color to pickedColor
		if(pickedsquare === pickedColor)
			{
				messageDisplay.textContent="Correct!";
				resetButton.textContent="Play Again";
				changeColors(pickedColor);
				h1.style.backgroundColor=pickedColor;

			}
		else
		{
			this.style.backgroundColor= "#232323";
			messageDisplay.textContent="Try Again"
		}

	});
}

function changeColors(color){
	//loop through all squares
	for(var i=0; i<colors.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
	//change each color to match given
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i=0; i<num; i++)
	{
		arr.push(randomColor());
		//get random color and push into arr

	}
	//return the array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var blue = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var green = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}
