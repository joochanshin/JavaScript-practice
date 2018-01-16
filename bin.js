function convert(n){
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


var n = prompt("Enter a number below 65535 to be converted into a 16-bit binary number:")
alert("Binary number is: " + _print_(convert(n)));