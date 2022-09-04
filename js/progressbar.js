let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}

function myFunctionScrollVideo() { //Desplazamiento del video hacia el navbar
  const element = document.getElementById("myNavbarID");
  element.scrollIntoView();
}
function myFunctionScrollSolutions() { //Desplazamiento del video hacia el navbar
  const element = document.getElementById("solutions");
  element.scrollIntoView();
}
function myFunctionScrollAbout() { //Desplazamiento del video hacia el navbar
  const element = document.getElementById("about");
  element.scrollIntoView();
}