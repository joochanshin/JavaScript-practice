function fib (n) {
	if(n <= 1) {
		return 1;
	} else {
		return fib(n - 1) + fib(n - 2);
	}
}
//  Calling out fibonacci numbers to the nth number
function cf(n){
  var t1 = performance.now();
  for(i = 0; i < n; i++){
    console.log(""+(i+1)+":",fib(i));
  }
  var t2 = performance.now();
  console.log("Took", ((t2-t1)/1000),"seconds");
}



// console.log(""+fib(n), "is the", n + "th fibonacci number");
