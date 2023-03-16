var modal = document.getElementById("myModal");
var img = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
const mql = window.matchMedia("(max-width: 480px)");
const imageScale  = (event) => {
  if (mql.matches) {
    modal.style.display = "block";
    modalImg.src = event.target.src;
  } else {
    modal.style.display = "none";
  }
}
mql.addEventListener("click", imageScale);