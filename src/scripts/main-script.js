/* Main Javascript logic for Todo App */

// Testing JS connection
console.log("Test JS script.");

// JS generated heading
const h3Content = document.querySelector("h3");
h3Content.textContent = "Javascript Heading";

// Basic prompt and conditional logic
let myName = prompt("What is your name?");

if(myName == "Mark"){
	alert("Hello," + myName);
}
else if(myName == "Tim"){
	alert("Hi, Tim");
}
else{
	alert("Don't know you.");
}

// Basic function 
function myFunc(name){
	if(name == "Mark"){
		alert("Mark's function passed");
	}
}

myFunc(myName);

// Button testing
document.querySelector("button").addEventListener("click", () => {
	alert("You pressed my button!");
})