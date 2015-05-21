/*


*/
function Myleneature(DOMelem, position){
	"use strict"
	var elem = DOMelem;
	var height = window.innerHeight;
	var elemSmallerThenClient = false;
	var scrollFunc; // скролл функция
	var indent = 1;

	this.changePosition = function(){
		if(height > elem.clientHeight){
			elemSmallerThenClient = true;
		}
		elem.style.top = window.scrollY+indent;
	}
//	Дефолтная функция скролла
	var topScrollFunc = function(){

	if(elemSmallerThenClient){
		if(+elem.style.top.replace('px','') < window.scrollY){
			elem.style.top = window.scrollY + indent;
		}

		if(+elem.style.top.replace('px','')+elem.clientHeight > window.scrollY + window.innerHeight){
		
			elem.style.top = window.scrollY + window.innerHeight - elem.clientHeight - indent;
			
		}
	}
	else{
		if(+elem.style.top.replace('px','') > window.scrollY)
		{
			elem.style.top = window.scrollY + indent;
		}
	
		if(+elem.style.top.replace('px','') + elem.clientHeight < window.scrollY + window.innerHeight)
		{
			elem.style.top = window.scrollY + window.innerHeight - elem.clientHeight - indent;
		}
	}
}
// Вторая функция обработки при скролле
var centerScrollFunc = function(){
		
	if(elemSmallerThenClient){
		
		elem.style.top = window.scrollY+height/2;
		
	}
	else{
		if(+elem.style.top.replace('px','') > window.scrollY)
		{
			elem.style.top = window.scrollY + indent;
		}
	
		if(+elem.style.top.replace('px','') + elem.clientHeight < window.scrollY + window.innerHeight)
		{
			elem.style.top = window.scrollY + window.innerHeight - elem.clientHeight - indent;
		}
	}
}




// обработка элемента	
	this.center = function(){
		if(height > elem.clientHeight){
			elemSmallerThenClient = true;
		}
		elem.style.top = window.scrollY+height/2;
	}	
	// выборка скролл обработчика


	if(position === 'top' || position === undefined){
		this.changePosition(); // перед запуском обрабатываем элемент
		scrollFunc = topScrollFunc;
	}else if(position === 'center'){
		this.center();
		scrollFunc = centerScrollFunc;
	}
	
	document.addEventListener('scroll',scrollFunc);	// скролл обрааботчик
	

}

var block = new Myleneature(document.getElementById('first'));
var block2 = new Myleneature(document.getElementById('second'), 'center');
var block3 = new Myleneature(document.getElementById('three'));
