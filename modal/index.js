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





