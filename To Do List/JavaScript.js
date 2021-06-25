/*global document , alert */
var myContainer = document.getElementById('container');

function showitem() {    
 'use strict';
var mySec = document.createElement('section') ,
	myArticle = document.createElement('article'),
	mySpan = document.createElement('span'),
	data = document.forms.myForm.text.value,
	myFont = document.createElement('i');
	document.forms.myForm.text.value = '';
	
	if(data === ''){
		alert('You have to enter a value')
	}else {
	myFont.setAttribute('class' , 'fas fa-times');
	mySec.setAttribute('class' , 'main');
	myArticle.setAttribute('class' , 'left');
	mySpan.setAttribute('id' , 'right');
	mySpan.setAttribute('class' , 'right');
	myContainer.appendChild(mySec);
	mySec.appendChild(myArticle);
	mySec.appendChild(mySpan);
	mySpan.appendChild(myFont);
	myArticle.innerHTML = data ;
	mySpan.onclick = function(){
	this.parentElement.style.display = 'none' ; 
		}
	}
	
	function click () {
	var myS = document.createElement('div'),
		myI = document.createElement('i');
		myS.setAttribute('class' , 'fas fa-check bb');
		myS.appendChild(myI);
		mySec.appendChild(myS);
		myS.style.color = "white";
		mySec.style.backgroundColor = '#275d6e';
		mySec.style.borderColor = 'white';
		mySpan.style.color = 'white';
		mySec.removeEventListener('click' , click)
	}
	
	mySec.addEventListener('click' , click)
}

document.getElementById('text').addEventListener('keydown' , function(event){
	if ( event.key === 'Enter'){
		event.preventDefault();
		document.getElementById('pencil').click();
	}
});






