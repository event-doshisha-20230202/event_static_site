window.addEventListener("DOMContentLoaded", function () {
  const alertBtn = document.getElementById("alert-btn");
  alertBtn.addEventListener("click", function (e) {
    document.getElementById("title").style.color = "rgb(50,180,200)"
    document.getElementById("title").style.fontFamily = "courier"
  });
});
