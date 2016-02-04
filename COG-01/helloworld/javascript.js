var myButton = document.getElementById("clickButton");
var myText = document.getElementById("helloText");

myButton.addEventListener('click', doSomething, false)

var i = 0; 
function doSomething() {
    if(i == 0){
    	myText.textContent = "Lala";
    	i++;
    }else {
    	myText.textContent = "?";
    	i--;
    }
}