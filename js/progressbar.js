let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}

function myFunctionScrollVideo() { //Desplazamiento del video hacia el navbar
  const element = document.getElementById("miBarraTop");
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




const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})