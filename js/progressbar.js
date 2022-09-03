let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}

var targetOffset,
    body = document.body,
    button = document.getElementById('scrollButton'),
    animateTime = 900;

button.addEventListener('click', function (event) {
  targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;

  body.style.transition = "margin-top " + animateTime + "ms ease-in-out";
  body.style.marginTop = "-" + targetOffset + "px";

  window.setTimeout(function () {
    body.style.cssText = "";
    window.scrollTo(0, targetOffset);
  }, animateTime);

  event.preventDefault();

}, false);