function beer(n){
	while(n>=0){
		if(n == 0){
			console.log("There are no more beers on the wall");
			n--;
		}
		else if (n == 1) {
			console.log(""+n+" bottle of beer on the wall, " + n + " bottle of beer.\n You take one down, pass it around, " + (n-1) + " bottles of beer on the wall.");
		n--;
		}
		else if (n==2) {
			console.log(""+n+" bottles of beer on the wall, " + n + " bottles of beer.\n You take one down, pass it around, there is only " + (n-1) + " bottle of beer on the wall.");
		n--;
		}
		else{
			console.log(""+n+" bottles of beer on the wall, " + n + " bottles of beer.\n You take one down, pass it around, " + (n-1) + " bottles of beer on the wall.");
			n--;
		}
	}
}

var n = prompt("How many beers are on the wall?");
console.log(beer(n));