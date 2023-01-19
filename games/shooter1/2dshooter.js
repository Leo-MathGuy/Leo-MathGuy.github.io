/** @type {Element} */
var c = document.getElementById("mainscreen");

var height = window.height;
var width = window.width;


/** @type {CanvasRenderingContext2D} */
var ctx = c.getContext();

function drawBackground() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
}