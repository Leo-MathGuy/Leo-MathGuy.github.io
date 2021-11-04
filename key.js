/*
Leonid Iudakov
Leo-MathGuy
2021 Copyright

This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

*/

var text = document.getElementById("text");

// The hackertyper code
var code = hackkkk(); // From code.js
var count = 1; // Total position
var char = 1;
var len = 1; // Characters to add
var codeLen = code.length; // Length of code

document.addEventListener("keydown", logKey); // Wait for keystrokes

function logKey(e) { // If a key is pressed
	if(count < 0) { // Backspacing wall
		count = 0;
	}
	
	if(finished) { // Make sure loading is finished
		if(text.innerHTML == "Start typing...") {
			typed = true;
			text.innerHtml = "";
		}
		e = e.key; // Key pressed
		if(e.length == 1 && e != "+" && e != "-" || e == "space") { // Basic hackertyping
			for(var i = 0; i < len; i++) {
				char = count % codeLen;
				textOps('add', e);
			}
		} else if(e == "Backspace") {
			text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
			count--;
			
			if(dBug) {
				document.getElementById("debug1").innerHTML = "Absolute Position: " + count;
				document.getElementById("debug2").innerHTML = "Iteration: " + Math.floor(count/codeLen);
				document.getElementById("debug3").innerHTML = "Current Character: " + char;
			}
		}
	}
}

var dList = ['d', 'e', 'b', 'u', 'g']; // debug mode things
var dCount = 0;
var dBug = false;

function textOps(mode, key) {
	
	if(mode == 'add') {
		
		if(dBug) {
			document.getElementById("debug1").innerHTML = "Absolute Position: " + count;
			document.getElementById("debug2").innerHTML = "Iteration: " + Math.floor(count/codeLen);
			document.getElementById("debug3").innerHTML = "Current Character: " + char;
		}
	
		if(code[char] == '\\') {
			if(code[char+1] == 'n') {
				text.innerHTML += '</br>';
			}
			count += 3;
		}
			
		text.innerHTML += code[count % codeLen];
		count++;
	
		for(var i = 0; i < 5; i++) {
			if(dList[i] == key) {
				textOps('debugCheck', key);
			}
		}
	}
	
	if(mode == 'remove') {
		
	}
	
	if(mode == 'debugCheck') {
		if(key == dList[dCount]) {
			if(dCount < 4){
				dCount++;
			} else {
				dCount = 0;
				textOps('debug', null);
			}
		} else {
			dCount = 0;
		}
	}
	
	if(mode == 'debug') {
		if(dBug) {
			document.getElementById("debug1").innerHTML = "";
			document.getElementById("debug2").innerHTML = "";
			document.getElementById("debug3").innerHTML = "";
			dBug = false;
		} else {
			document.getElementById("debug1").innerHTML = "Absolute Position: " + count;
			document.getElementById("debug2").innerHTML = "Iteration: " + Math.floor(count/codeLen);
			document.getElementById("debug3").innerHTML = "Current Character: " + char;
			dBug = true;
		}
	}
}
