//Data Types:
//	- numbers/integers
//	- strings
//	- boolean
//	- undefined
//	- null

var x = 12;
var y = 5;
var product;

function plus (x, y){
	return x + y;
}

product = plus(x, y);

console.log(product);

var str1 = "This is the first part of a sentence, "
var str2 = "and this is the second part of a sentence."

console.log(plus(str1, str2));

var joochan = {
	firstName: "JooChan",
	lastName: "Shin",
	birthday: "June 7th",
	interests: ["Basketball", "Guitar", "Dance"]

}

for(var prop in joochan){
	console.log(prop, ":", joochan[prop])
	
}