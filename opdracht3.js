function NL(name, age){
	document.write("Hallo " + name + ", jouw leeftijd is " + age + " jaar" + "<br>");

}

var name = prompt("Hallo, wat is uw naam?");
var age = prompt("Hoe oud bent u?");

while(name != "stop"){
	NL(name,age);
	name = prompt("Hallo, wat is uw naam?");
	age = prompt("Hoe oud bent u?");
}


NL()