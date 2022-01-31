let frontTitle = document.querySelector("#auto-text");
let timeout;

function typeEffect(element, speed) {
  var text = frontTitle.innerHTML;
  frontTitle.innerHTML = "|";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}
// application
var speed = 40;
var h1 = document.querySelector("#auto-text");
var delay = h1.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h1, speed);
