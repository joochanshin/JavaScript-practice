//Data Types:
//	- numbers/integers
//	- strings
//	- boolean
//	- undefined
//	- null

var x = 12;
var y = 5;
var product;
var counter = 0;

function plus (x, y){
	return x + y;
}

product = plus(x, y);

console.log("Simple math:", x, "+", y, "=", product, "\n");

var str1 = "This is the first part of a sentence, "
var str2 = "and this is the second part of a sentence."
var str3 = str1;

console.log(plus(str1, str2));

//	Create a script with two variables, each assigned to a number. 
//	Add them together and output the result to the console. 
//	Now do the same with two strings.

var array = ["Basketball", "Guitar", "Dance"];

var joochan = {
	firstName: "JooChan",
	lastName: "Shin",
	birthday: "June 7th",
	interests: array
}

for(var prop in joochan){
	console.log(prop, ":", joochan[prop])
	if(counter == 2){
		console.log("\nI have ", array.length, " interests. \n")
		for(i = 0; i < array.length; i++){
			console.log("Interest ", i+1, " is ", array[i]);
		}
		break;
	}
	counter++;
}

//	Write a script that checks if a variable captured from a prompt is less than 100. 
//	If it is, alert the user that their variable is less than 100. 
//	If it is not alert the user of what the value was and that it was greater than 100.

var usrIn = prompt("Enter a number: ");

if(usrIn < 100){
	alert("You inputed a nmber less than 100");
} else if(usrIn == 100){
	alert("You inputed a number that is exacly 100");
}else{
	alert("You inputed " + usrIn + " and it is greater than 100");
}

//	Part 4 is changing variables.

// Try running the script and then changing the variable's value to see how this affects the program's output.

if(str1 === str2){
	console.log("String 1:", str1, "is the same as", str2);
} else{
	console.log("String 1:", str1, "is not the same as", str2);
}

//	Declare a function that takes a name as an argument and tells the user what name they've entered. 
//	Try running it after it has been declared.

var name = prompt("Enter a name:");

function nameCheck (name){
	console.log("You entered the name", name);
}

nameCheck(name);

//	Declare a function that takes no arguments but prints something to the console. 
//	Try running it after it has been declared.

function printSomething(){
	console.log("This is printing something");
}

printSomething();

//	Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. 
//	After declaring the function, try running it with different options. 
//	There must be at least 3 doors.

var bool = false;

while(!bool){
	var choice = prompt("Pick a door from 1-5:");
	if(choice == 1 || choice == 2 || choice == 3 || choice == 4 || choice == 5){
		bool = true;
		switch (choice) {
			case "1":
				alert("You win a turtle");
				break;
			case "2":
				alert("You win a rock");
				break;
			case "3":
				alert("You win a bird");
				break;
			case "4":
				alert("You win an iPhone X");
				break;
			case "5":
				alert("You win a Lambo");
				break;
			default:
				alert("You win nothing");
		}
		console.log(choice);
	}
	else{
		alert("Try again...");
	}
}












