//	 Problem 1

var Multiplier = {
	num1: 1,
	multiply: function(num){
		return this.num1 *= num;
	},
	getCurrentValue: function(){
		return this.num1;
	}
}

console.log(Multiplier.getCurrentValue());
console.log(Multiplier.multiply(4));
console.log(Multiplier.getCurrentValue());
console.log(Multiplier.multiply(5));
console.log(Multiplier.getCurrentValue());
console.log(Multiplier.multiply(7));
console.log(Multiplier.getCurrentValue());

//	Problem 2

function Photo(name, location) {
	this.name = name;
	this.location = location;
}

var Album = {
	photos: [],
	add: function(p){
		this.photos.push(p);
		return "Photo added";
	},
	list: function(){
		return this.photos;
	},
	access: function(i){
		return "At index " + i +", the photo is " + this.photos[i-1].name;
	},
	length_: function(){
		return this.photos.length;
	},
	get_: function(i){
		return "" + this.photos[i].location;
	}
}

var p1 = new Photo("Photo 1", "img/photo1.jpeg");
var p2 = new Photo("Photo 2", "img/photo2.jpg");
var p3 = new Photo("Photo 3", "img/photo3.jpg");
var p4 = new Photo("Photo 4", "img/photo4.jpeg");
var p5 = new Photo("Photo 5", "img/photo5.jpeg");
var p6 = new Photo("Photo 6", "img/photo6.jpg");
var p7 = new Photo("Photo 7", "img/photo7.jpeg");
var p8 = new Photo("Photo 8", "img/photo8.jpg");

console.log(p1.name);
console.log(Album.add(p1));
console.log(Album.add(p2));
console.log(Album.add(p3));
console.log(Album.add(p4));
console.log(Album.add(p5));
console.log(Album.add(p6));
console.log(Album.add(p7));
console.log(Album.add(p8));
console.log(Album.list());
console.log(Album.access(2));


for(var i = 0; i < Album.length_(); i++){
	var img = document.createElement("img");
	document.getElementById("orbit").appendChild(img);
	img.setAttribute("src", Album.get_(i));
	img.setAttribute("class", "img");
}

function clicked1(){
	document.getElementById("orbit").style.animation = "rotate 1s linear infinite";
}

function clicked2(){
	document.getElementById("orbit").style.animation = "rotate 10s linear infinite";
	for(let i = 0; i < 8; i++){
		document.getElementsByClassName("img")[i].style.backgroundColor = "white";
	}
}

function clicked3(){
	document.getElementById("orbit").style.animation = "grow 3s linear infinite";
}

function clicked4(){
	for(let i = 0; i < 8; i++){
		document.getElementsByClassName("img")[i].style.backgroundColor = "red";
	}
}

//	Problem 3

function Person (fname, lname, age) {
	this.fname = fname;
	this.lname = lname;
	this.age = age;
}

function Student (fname, lname, age, year, GPA){
	this.year = year;
	this.GPA = GPA;

	Person.call(this, fname, lname, age);
}

function Teacher (fname, lname, age, subject){
	this.subject = subject;

	Person.call(this, fname, lname, age);
}

var School = {
	teachers: [],
	students: [],
	add_S: function(s){
		this.students.push(s);
		return "Students added";
	},
	add_T: function(t){
		this.teachers.push(t);
		return "Teachers added";
	},
	list_S: function(){
		return this.students;
	},
	list_T: function(){
		return this.teachers;
	}
}

var t1 = new Teacher ("John", "Doe", "21", "Math");
var t2 = new Teacher ("John2", "Doe", "25", "Physics");
var t3 = new Teacher ("John3", "Doe", "27", "Chemistry");

var s1 = new Student ("And", "rew", "21", "Senior", "4.0");
var s2 = new Student ("1And", "rew", "22", "Junior", "2.0");
var s3 = new Student ("2And", "rew", "23", "Freshman", "3.0");


console.log(t2);
console.log(s1);


console.log(School.add_S(s1));
console.log(School.add_S(s2));
console.log(School.add_S(s3));
console.log(School.add_T(t1));
console.log(School.add_T(t2));
console.log(School.add_T(t3));

console.log(School.list_S());
console.log(School.list_T());






















