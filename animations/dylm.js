let tl = gsap.timeline();
var school = document.getElementById("school_picture");
tl.to(school, {
  duration:1,
  delay:1,
  opacity:1,
  onComplete: () => {
    var gren = document.createElement("div");
    gren.style.width = "100px";
    gren.style.height = "60px";
    gren.style.position = "absolute";
    gren.style.backgroundColor = "darkGrey";
    gren.style.opacity = 0;
    gren.style.left = "800px";
    gren.style.top = "300px";
  }
});