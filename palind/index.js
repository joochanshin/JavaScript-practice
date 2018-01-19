function palind(word){
	this.word = word.toLowerCase().split("").reverse().join("");
	console.log(this.word);

	if(this.word === word.toLowerCase()){
		return console.log("true");
	} else {
		return console.log("false");
	}
}

palind("hello");