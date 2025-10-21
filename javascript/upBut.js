"use strict"

// прокрутка вниз
if(/.*Version.*Safari.*/.test(navigator.userAgent)){
  var docum = document.querySelector("body");
} else{
  var docum = document.documentElement;
};
let buttonScroll = document.querySelector(".up-but");
var coordsModelBlock = document.querySelector(".main-header").getBoundingClientRect();

buttonScroll.onclick = function () {
    scrollTo(docum, document.querySelector(".main-header").getBoundingClientRect().top, 1500);
};

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};