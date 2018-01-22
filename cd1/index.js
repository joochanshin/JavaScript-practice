function add_ (arr) {
	var sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum =  sum + arr[i];
	}
	return sum;
}

var num = [1, 2, 3];

console.log(add_(num));

function sum (total, num) {
	return total + num;
}

console.log(num.reduce(sum));