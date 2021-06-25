/*global document*/
function display() {
	document.getElementById('test2').style.display = "none" ;
	document.getElementById('test4').style.display = "none" ;
	document.getElementById('test3').style.display = "none" ;
	document.getElementById('test1').style.display = "block" ;
}

function display1() {
	document.getElementById('test3').style.display = "none" ;
	document.getElementById('test4').style.display = "none" ;
	document.getElementById('test2').style.display = "block" ;
	document.getElementById('test1').style.display = "none" ;
}



function display2() {
	document.getElementById('test4').style.display = "none" ;
	document.getElementById('test3').style.display = "block" ;
	document.getElementById('test2').style.display = "none" ;
	document.getElementById('test1').style.display = "none" ;
}

function display3() {
	document.getElementById('test4').style.display = "block" ;
	document.getElementById('test3').style.display = "none" ;
	document.getElementById('test1').style.display = "none" ;
	document.getElementById('test2').style.display = "none" ;
}