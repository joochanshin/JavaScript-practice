function filt(arr){
	return arr.filter(num => num % 2 === 1);
}

console.log(filt([1,2,3,-5,-6,-7,4]));