/*
Leonid Iudakov
Leo-MathGuy
2021 Copyright

This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

*/

//// Beginning Effects ////

var text = document.getElementById("bigTextThingy");

text.innerHTML = "Loading";
document.title = "Loading";

window.timer = window.setTimeout(() => null, 0);
window.time = 0;

function waitFunction(func, delay) { // cool version of setTimeout()
	timer = window.setTimeout(func, delay*1000 + time);
	time = time + delay*1000;
}

function load(t, _callback) {
	var text = document.getElementById("bigTextThingy");
	
	waitFunction(() => {text.innerHTML = t}, 1);  // Change Dots
	
	waitFunction(() => {text.innerHTML = t+"."}, 1);
	
	waitFunction(() => {text.innerHTML = t+".."}, 1);
	
	waitFunction(() => {text.innerHTML = t+"..."}, 1);
	
	_callback();
}

load("Loading", function() {
	load("Compiling", function() {
		load("Initializing", function() {
			load("Visualizing", function() {
				wait();
			});
		});
	});
});

clearTimeout(timer);
