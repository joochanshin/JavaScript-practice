function clock(){
	var now = new Date();

	var hr = now.getHours();
	var mn = now.getMinutes();
	var sc = now.getSeconds();
	//
	hr = convert(hr);
	mn = convert(mn);
	sc = convert(sc);
	var color = "#"+hr+mn+sc;
	document.getElementById("clock").innerHTML = hr+":"+mn+":"+sc;
	document.getElementById("body").style.background = color;
}

setInterval(clock, 1000);

function convert(i) {
    if (i < 10) {
    	i = "0" + i;
    }  
    return i;
}