let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}

function myFunctionScroll() { //Del video hacia el navbar
  const element = document.getElementById("myNavbarID");
  element.scrollIntoView();
}