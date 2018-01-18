var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];


setTimeout( function(){modal.style.display = "block"}, 3000);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function clicked(){
	document.getElementById("header-text").innerHTML = "Thank You";
	document.getElementsByClassName("modal-body")[0].innerHTML = "You shall receive an email soon";
	document.getElementsByClassName("modal-body")[0].style.textAlign = "center";
	document.getElementsByClassName("modal-body")[0].style.fontSize = "3em";
}

function close() {
	modal.style.display = "none";
}


for(let i = 0; i < 4; i++){
	setInterval(function(){ 
		document.getElementsByClassName("shape")[i].style.marginTop = ""+getRandomInt(1000)+"px"; 
	}, 2000);
	setInterval(function(){ 
		document.getElementsByClassName("shape")[i].style.marginLeft = ""+getRandomInt(2000)+"px"; 
	}, 2000);

	setInterval(function(){ 
		document.getElementsByClassName("shape1")[i].style.marginTop = ""+getRandomInt(1000)+"px"; 
	}, 1000);
	setInterval(function(){ 
		document.getElementsByClassName("shape1")[i].style.marginLeft = ""+getRandomInt(2000)+"px"; 
	}, 1000);

	setInterval(function(){ 
		document.getElementsByClassName("shape2")[i].style.marginTop = ""+getRandomInt(1000)+"px"; 
	}, 3000);
	setInterval(function(){ 
		document.getElementsByClassName("shape2")[i].style.marginLeft = ""+getRandomInt(2000)+"px"; 
	}, 3000);
}

var body = document.getElementById("body");

body.addEventListener("keydown", function(){
	var _1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	var _2 = '#'+(Math.random()*0xFFFFFE<<0).toString(16);
	body.style.background = "linear-gradient(-45deg,"+_1+","+_2+")";
	body.style.backgroundSize = "400% 1000%";
});



