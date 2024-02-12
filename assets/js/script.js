document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById('checkbox');
    const bottone = document.getElementById('bottone');
    const popup = document.getElementById('popup');
    const close = document.querySelector('.close');

    bottone.addEventListener('click', function() {
      if (!checkbox.checked) {
        popup.style.display = "block";
      } else {
        window.open("index2.html", "_blank");
      }
    });
    close.addEventListener('click', function() {
      popup.style.display = "none";
    });
  });