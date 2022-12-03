var date = new Date();
var currentHour = date.getHours();
var currentMinute = date.getMinutes();
var currentSecond = date.getSeconds();
var secondHand = document.querySelector(".second");
var minuteHand = document.querySelector(".minute");
var hourHand = document.querySelector(".hour");
var x = currentSecond * 6;
var y = currentMinute * 6 + ((6/60)*currentSecond);
var z = currentHour * 30 + ((30/60)*currentMinute + (((30/60)/60)*currentSecond));
// 'x' is the degree value of the secondHand 'Transform[Rotate]'
// 'y' is the degree value of the minuteHand 'Transform[Rotate]'
// 'z' is the degree value of the hourHand 'Transform[Rotate]'
setInterval(function () {
  x += 6/100;
  y += (6/100/60);
  z += (6/100/60/12);
  secondHand.style.transform = "rotate(" + x + "deg)";
  minuteHand.style.transform = "rotate(" + y + "deg)";
  hourHand.style.transform = "rotate(" + z + "deg)";
}, 10);
window.addEventListener("focus", function () {
  window.location.reload();
});