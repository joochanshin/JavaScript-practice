function stringy (size){
	var str = "";
	for(let i = 0; i < size; i++){
		if(i%2 === 0)
			str += "1";
		else
			str += "0";
	}
	return str;
}

console.log(6+ ": " + stringy(6));
console.log(4+ ": " + stringy(4));
console.log(12+ ": " + stringy(12));

function convert(n){	//	Only works for 65535 because only works for 16-bit numbers
	var number = [];
	for(var i = 15; i >= 0; i--){
		if(n >= Math.pow(2, i+1)){
			alert("Number exceeded limit");
			break;
		}
		if(n < Math.pow(2, i+1) && n >= Math.pow(2, i)){
			number.push(1);
			n = n - Math.pow(2, i);
		}
		else{
			//console.log(i, Math.pow(2,i));
			number.push(0);
		}
	}
	return number;
}

function _print_ (array){
	var binary = "";
	for(var i = 0; i < array.length; i++){
		binary = binary + array[i];
	}
	return binary;
}

var n = 65535;
console.log(_print_(convert(n)));

function reverse(str){
	var digits = [];
	for(let i = str.length; i >= 0; i--){
		digits.push(str[i]);
	}
	return digits;
}

console.log(reverse("21345678"));

function fib (n) {
	if(n <= 1) {
		return 1;
	} else {
		return fib(n - 1) + fib(n - 2);
	}
}

function cf(n){
	for(i = 0; i < n; i++){
		console.log(""+(i+1)+":",fib(i));
	}
}

cf(30);

var months = [
["January", "01"],
["February", "02"],
["March", "03"],
["April", "04"],
["May", "05"],
["June", "06"],
["July", "07"],
["August", "08"],
["September", "09"],
["October", "10"],
["November", "11"],
["December", "12"]
];

var d = new Date();
var m = "" + d.getMonth() + 1;
var day = "" +  d.getDate();
var y = d.getFullYear();

if(m.length === 1)
	m = "0" + m;
if(day.length === 1)
	day = "0" + day;

var dateB = "" + y + "" + m + "" + day;

function checkCoupon (date){
	var dateC = "";
	var month = "";
	var __day__ = "";
	var year = "";
	var counter = 0;

	for(let i = 0; i < date.length; i++){
		if(isLetter(date[i].toLowerCase())){
			month += date[i];
		}
		else if(date[i] === " "){
			i++;
			counter++;
		}
		else if(date[i] === ","){
			i+=2;
			counter++;
		}

		if(counter === 1){//		Stores day of month
			__day__ += date[i];
		}
		else if(counter === 2){//	Stores year
			year += date[i];
		}
	}
	// --	--	--	--	--	--	--	--
	dateC += year;
	for(let i = 0; i < months.length; i++){
		if(month == months[i][0]){
			dateC += months[i][1];
		}
	}
	if(__day__.length == 1){
		__day__ = "0" + __day__;
	}
	dateC += __day__;
	console.log(":" + parseInt(dateC));
	console.log(":" + parseInt(dateB));
	if(parseInt(dateC) < parseInt(dateB))
		console.log("Coupon has expired");
	else
		console.log("Coupon is valid");
}

checkCoupon("June 7, 2018");
function isLetter(str) {
	return str.length === 1 && str.match(/[A-Za-z]/i);
}
function isEmail(str) {
	return str.length === 1 && str.match(/\w/i);
}
function checkEmail(email){
	var iter = 0;
	if(!isLetter(email[0])){
		console.log("Not an email");
		return false;
	}
	for(let i = 1; i < email.length; i++){
		if(iter === 0){
			if(email[i] !== "@"){
				if(!isEmail(email[i]))
					return false;
			}
			else{
				iter++;
			}
		}
		else if(iter === 1){
			if(email[i] !== "."){
				if(!isEmail(email[i]))
					return false;
			}
			else{
				iter++;
			}
		}
		else if(iter === 2){
			if(!isEmail(email[i]))
				return false;
		}
	}
	return true;
}

if(checkEmail("a123@gmail.com"))
	console.log("Valid email")
else
	console.log("Not a valid email")



// function name(arr){
// 	var names = "";
// 	for(let i = 0; i < arr.length; i++){
// 		if(i === 0)
// 			 names += arr[i];
// 		else if(i != arr.length-1)
// 			names = names + ", " + arr[i];
// 		else
// 			names = names + ", and " + arr[i];
// 	}
// 	return names;
// }

// var names = ["John", "George", "James", "Anna"];

// console.log(name(names));

// function objectLit(){
// 	var titles =  [["Dostoyevski", "Idiot"], ["Twain", "The price and the pauper"], ["Poe", "The raven"], ["Remark", "All quiet on the western front"], ["Kafka", "The trial"]];
// 	var __return__ = {};
// 	titles.forEach(function(el){
// 		// __return__.push(el[0] + ": " + el[1]);
// 		__return__[el[0]] = el[1];
// 	});
// 	return __return__;
// }

// console.log(objectLit());


// var naming = document.getElementById("name");
// var button = document.getElementById("button");
// var header = document.getElementById("header");


// if(Cookies.get("name") != undefined){
// 	header.innerHTML = "Welcome back " + Cookies.get("name")+"!";
// }

// button.addEventListener("click", change);

// function change(){
// 	Cookies.set("name", naming.value);
// 	console.log(naming.value);
// }





































