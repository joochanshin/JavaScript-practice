// function stringy (size){
// 	var str = "";
// 	for(let i = 0; i < size; i++){
// 		if(i%2 === 0)
// 			str += "1";
// 		else
// 			str += "0";
// 	}
// 	return str;
// }

// console.log(6+ ": " + stringy(6));
// console.log(4+ ": " + stringy(4));
// console.log(12+ ": " + stringy(12));

// function convert(n){	//	Only works for 65535 because only works for 16-bit numbers
// 	var number = [];
// 	for(var i = 15; i >= 0; i--){
// 		if(n >= Math.pow(2, i+1)){
// 			alert("Number exceeded limit");
// 			break;
// 		}
// 		if(n < Math.pow(2, i+1) && n >= Math.pow(2, i)){
// 			number.push(1);
// 			n = n - Math.pow(2, i);
// 		}
// 		else{
// 			//console.log(i, Math.pow(2,i));
// 			number.push(0);
// 		}
// 	}
// 	return number;
// }

// function _print_ (array){
// 	var binary = "";
// 	for(var i = 0; i < array.length; i++){
// 		binary = binary + array[i];
// 	}
// 	return binary;
// }

// var n = 6587;
// console.log("The number, " + n + ", is " + _print_(convert(n)) + " in binary");

// function reverse(str){
// 	var digits = [];
// 	for(let i = str.length; i >= 0; i--){
// 		digits.push(str[i]);
// 	}
// 	return digits;
// }

// console.log(reverse("21345678"));

// function fib (n) {
// 	if(n <= 1) {
// 		return 1;
// 	} else {
// 		return fib(n - 1) + fib(n - 2);
// 	}
// }

// function cf(n){
// 	for(i = 0; i < n; i++){
// 		console.log(""+(i+1)+":",fib(i));
// 	}
// }

// cf(30);

// var months = [
// ["January", "01"],
// ["February", "02"],
// ["March", "03"],
// ["April", "04"],
// ["May", "05"],
// ["June", "06"],
// ["July", "07"],
// ["August", "08"],
// ["September", "09"],
// ["October", "10"],
// ["November", "11"],
// ["December", "12"]
// ];

// var d = new Date();
// var m = "" + d.getMonth() + 1;
// var day = "" +  d.getDate();
// var y = d.getFullYear();

// if(m.length === 1)
// 	m = "0" + m;
// if(day.length === 1)
// 	day = "0" + day;

// var dateB = "" + y + "" + m + "" + day;

// function checkCoupon (date){
// 	var dateC = "";
// 	var month = "";
// 	var __day__ = "";
// 	var year = "";
// 	var counter = 0;

// 	for(let i = 0; i < date.length; i++){
// 		if(isLetter(date[i].toLowerCase())){
// 			month += date[i];
// 		}
// 		else if(date[i] === " "){
// 			i++;
// 			counter++;
// 		}
// 		else if(date[i] === ","){
// 			i+=2;
// 			counter++;
// 		}

// 		if(counter === 1){//		Stores day of month
// 			__day__ += date[i];
// 		}
// 		else if(counter === 2){//	Stores year
// 			year += date[i];
// 		}
// 	}
// 	// --	--	--	--	--	--	--	--
// 	dateC += year;
// 	for(let i = 0; i < months.length; i++){
// 		if(month == months[i][0]){
// 			dateC += months[i][1];
// 		}
// 	}
// 	if(__day__.length == 1){
// 		__day__ = "0" + __day__;
// 	}
// 	dateC += __day__;
// 	console.log(":" + parseInt(dateC));
// 	console.log(":" + parseInt(dateB));
// 	if(parseInt(dateC) < parseInt(dateB))
// 		console.log("Coupon has expired");
// 	else
// 		console.log("Coupon is valid");
// }

// checkCoupon("June 7, 2017");
// function isLetter(str) {
// 	return str.length === 1 && str.match(/[A-Za-z]/i);
// }
// function isEmail(str) {
// 	return str.length === 1 && str.match(/\w/i);
// }
// function checkEmail(email){
// 	var iter = 0;
// 	if(!isLetter(email[0])){
// 		console.log("Not an email");
// 		return false;
// 	}
// 	for(let i = 1; i < email.length; i++){
// 		if(iter === 0){
// 			if(email[i] !== "@"){
// 				if(!isEmail(email[i]))
// 					return false;
// 			}
// 			else{
// 				iter++;
// 			}
// 		}
// 		else if(iter === 1){
// 			if(email[i] !== "."){
// 				if(!isEmail(email[i]))
// 					return false;
// 			}
// 			else{
// 				iter++;
// 			}
// 		}
// 		else if(iter === 2){
// 			if(!isEmail(email[i]))
// 				return false;
// 		}
// 	}
// 	return true;
// }

// if(checkEmail("a123@gmail.com"))
// 	console.log("Valid email")
// else
// 	console.log("Not a valid email")



// // function name(arr){
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

// function three4 (){
// 	var sum = 0;
// 	for(let i = 0; i <= 1000; i++){
// 		if(i%3 === 0)
// 			sum += i;
// 		else if (i%4 === 0)
// 			sum += i;
// 	}
// 	return sum;
// }

// function stars(length){
// 	var str = "";
// 	for(let i = 0; i < length; i++){
// 		str += "*";
// 	}
// 	return str;
// }

// function stars2(str){
// 	var str2 = "";
// 	for(let i = 0; i < str.length; i++){
// 		str2 += str + "\n";
// 	}
// 	return str2;
// }

// function fact(num){
// 	if(num < 0)
// 		return null;
// 	else if (num === (0||1))
// 		return 1;
// 	else
// 		return num*fact(num-1)
// }

// console.log(three4());
// console.log(stars(5));
// console.log(stars2(stars(5)));
// console.log(fact(5));

var body = document.getElementById("body");

var divA = document.createElement("div");
var divE = document.createElement("div");
var divI = document.createElement("div");
var divO = document.createElement("div");
var divU = document.createElement("div");

var nodeA = document.createTextNode("A");
var nodeE = document.createTextNode("E");
var nodeI = document.createTextNode("I");
var nodeO = document.createTextNode("O");
var nodeU = document.createTextNode("U");

divA.appendChild(nodeA);
divE.appendChild(nodeE);
divI.appendChild(nodeI);
divO.appendChild(nodeO);
divU.appendChild(nodeU);

divA.style.width = "30px";
divA.style.height = "30px";
divA.style.border = "2px solid black";

divA.setAttribute("onclick", "clicked(divA)");
divE.setAttribute("onclick", "clicked(divE)")
divI.setAttribute("onclick", "clicked(divI)")
divO.setAttribute("onclick", "clicked(divO)")
divU.setAttribute("onclick", "clicked(divU)")

divE.style.width = "30px";
divE.style.height = "30px";
divE.style.border = "2px solid black";

divI.style.width = "30px";
divI.style.height = "30px";
divI.style.border = "2px solid black";

divO.style.width = "30px";
divO.style.height = "30px";
divO.style.border = "2px solid black";

divU.style.width = "30px";
divU.style.height = "30px";
divU.style.border = "2px solid black";

body.appendChild(divA);
body.appendChild(divE);
body.appendChild(divI);
body.appendChild(divO);
body.appendChild(divU);

function clicked(x){
	console.log(x.textContent);
}



























