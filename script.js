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

// function sendMail(){
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "shivammaheshwari503@gmail.com",
//     Password : "93B9A0E01851828946348DADB87A9DE493F4",
//     To : 'shivam8077990774@gmail.com',
//     From : "shivammaheshwari503@gmail.com",
//     Subject : "This is the subject",
//     Body : "Name:" + document.getElementById("name").value
//     + "<br> Email:" + document.getElementById("email").value
//     + "<br> Message:" + document.getElementById("message").value
// }).then(
//   message => alert(message + " " + "Message Send Successfully!")
// );

// }