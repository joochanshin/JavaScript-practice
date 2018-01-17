function add(a,b){
	if(a+b>100){
		console.log("The sum is greater than 100");
	}
	else{
		console.log("The sume is not greater than 100");
	}
}

function _n_(){
	for (var i = 1; i <= 100; i++){
		if(i%2==0){
			console.log(""+i+" is an even number");
		}
		else{
			console.log(""+i+" is an odd number");
		}
	}
}

add(50,70);
_n_();