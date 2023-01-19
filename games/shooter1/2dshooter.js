/** @type {Element} */
var c = document.getElementById("mainscreen");

var height = 600;
var width = 800;


/** @type {CanvasRenderingContext2D} */
var ctx = c.getContext();

function clearBg() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
}

var introStatus = 0; // 0 - Not complete  1 - Complete
var introFrame = 0;

function drawIntro(frame) {
    /* 
    Intro sequence:

    Second 0-1 : Pause
    Second 1 : Text appears
    Second 1.5-2 : Text zooms out

    */

    if (frame >= 60 && frame <= 90) {
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.font = "20px Arial";
        ctx.fillText("By Leo-MathGuy", 400, 300);
    } else if (frame > 90 && frame <= 150) {
        var afterBlur = frame - 90;
        var blurPercent = afterBlur / 30;
        var fontSize = blurPercent;
        fontSize *= 20;

        ctx.fillStyle = "#FFF";
        ctx.textAlign = "center";
        ctx.font = fontSize.toString() + "px Arial";
        ctx.fillText("By Leo-MathGuy", 400, 300);
    }
    if (frame == 91) {
        introStatus = 1;
        return;
    }
}
var stats = document.getElementById("status");
function draw() {
    clearBg()
    if (introStatus == 0) {
        drawIntro(introFrame);
        introFrame += 1;
    }
    stats.innerHtml = introFrame.toString() + introStatus.toString();
    requestAnimationFrame(draw);
}
stats.innerHTML = "Hi";
requestAnimationFrame(draw);
