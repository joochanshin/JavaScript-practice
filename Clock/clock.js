function clock(){
	var now = new Date();

	var hr = now.getHours();
	var mn = now.getMinutes();
	var sc = now.getSeconds();
	//
	var _m = "";
	var hr1=hr;
	if(hr%12>=1){
		_m = "PM";
		hr=hr-12;
	} else {
		_m = "AM";
	}
	hr1 = convert(hr1);
	mn = convert(mn);
	sc = convert(sc);
	var color = "#"+hr1+mn+sc;
	document.getElementById("clock").innerHTML = hr+":"+mn+":"+sc+" " + _m;
	document.getElementById("body").style.background = color;
}

setInterval(clock, 1000);

function convert(i) {
    if (i < 10) {
    	i = "0" + i;
    }  
    return i;
}