document.addEventListener("DOMContentLoaded", function () {
  localStorage.removeItem("ArrayGiuste");
  const checkbox = document.getElementById("checkbox");
  const bottone = document.getElementById("bottone");
  const popup = document.getElementById("popup");
  const close = document.querySelector(".close");

  bottone.addEventListener("click", function () {
    if (!checkbox.checked) {
      popup.style.display = "block";
    } else {
      window.location.href = "index2.html";
    }
  });
  close.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
