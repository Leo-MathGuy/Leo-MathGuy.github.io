/*
Leonid Iudakov
Leo-MathGuy
2021 Copyright

This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

*/

/*var i = 0;

inter = setInterval(function() {
	
	if(i == 50) {
		clearInterval(inter);
	}
	
	i++;

}, 250);
*/
var skipBar = true;

var finished = false;

var previous = 0; // Set previous variable

var end = 0; // Don't know hot to implement into timeMultiplier so made a seperate variable for the long ending

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};

for(let i = 0; i < 101; i++) { // 100 times
	if(skipBar) {
		timeMultiplier = 0.1;
	} else {
		timeMultiplier = -10; // Reset
		
		while(timeMultiplier < previous) { // To not glitch
		
			timeMultiplier = Math.floor(Math.random() * ((15 - 10) + 1)) + 10; //Generate random number between 10 and 15
			
			timeMultiplier = timeMultiplier / ((i+5)*0.10); // Make it smaller as time progresses
			
			timeMultiplier = 30 - timeMultiplier; // Reverse it
			
			timeMultiplier = timeMultiplier * 0.10; // Make it even more smaller
		}
		
		previous = timeMultiplier;
		
		if(i > 43 && (timeMultiplier * (i+1)/150) > 2) { // To not mess up, added second thing to be safe
			timeMultiplier *= (i+1)*10; // Progressively make it slower
		}
	
		if(i > 97) { // Ending
			end = 750;
		}
		
		if(i == 100) { // Ending also
			end = 2500; // Long by tradition
		}
		
	}
	
	timeout = setTimeout( // Change everything progress-bar related
		function() {
			document.getElementById("progressText").innerHTML = i + "%";
			document.getElementById("bar").style.width = i + "%";
			if(document.getElementById("progressText").innerHTML == "100%") {
				ending();
			}
		}, 75 * timeMultiplier*i*i*0.007 + (end*Math.abs(96-i)));
}

let b = 0;

var typed = false;
var text = document.getElementById("text");

function go() {
	setTimeout(function() {
        if(!typed) {
        	text.innerHTML = "Start typing...";
        }
    }, 5000);
}

function ending() {
	setTimeout(function() {
		finished = true;
		document.getElementById("progress").remove();
		document.getElementById("progressText").remove();
		document.getElementById("bigTextThingy").remove();
        document.title = "Geek Typer";
        go();
	}, 1000);

}
