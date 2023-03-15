var modal = document.getElementById("myModal");
var img = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
function imageScale(event) {
  modal.style.display = "block";
  modalImg.src = event.target.src;
  console.log(event.target.src);
}
span.onclick = function () {
  modal.style.display = "none";
};
