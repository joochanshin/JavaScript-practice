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

console.log(plus(str1, str2));

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