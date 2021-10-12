/*
Leonid Iudakov
Leo-MathGuy
2021 Copyright

This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

*/

//// This is a testing script when I used px. Now I use vw/vh ////

var text = document.getElementById("bigTextThingy");
var number = document.getElementById("test");

var timer = setInterval(fillHerUp, 100);

var i = 0;

function fillHerUp() {
	text.style.fontSize = i+"px"; // Change px to vw for dynamic size testing
	test.innerHTML = i;
	i++;
	
	if(i > 150) {
		clearInterval(timer);
		i = 150;
	}
}


function add(x){
	i += x;
	text.style.fontSize = i+"px"; // Change px to vw for dynamic size testing
	test.innerHTML = i;
}