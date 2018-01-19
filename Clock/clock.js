function clock(){
	var now = new Date();

	var hr = now.getHours();
	var mn = now.getMinutes();
	var sc = now.getSeconds();
	//
	hr = convert(hr);
	mn = convert(mn);
	sc = convert(sc);

	document.getElementById("clock").innerHTML = hr+":"+mn+":"+sc;
	setInterval(clock, 1000);
}



function convert(i) {
    if (i < 10) {
    	i = "0" + i;
    }  
    return i;
}