let voto = 0;
document.addEventListener("DOMContentLoaded", function () {
    const ratingStarsContainer = document.getElementById('ratingStars');
    // Aggiungi le stelline per la valutazione
    for (let i = 1; i <= 10; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.setAttribute('data-value', i);
        star.innerText = '★'; // Puoi sostituire con un'icona stella se preferisci
        ratingStarsContainer.appendChild(star);
        star.style.fontSize = '40px'
        star.style.cursor = 'pointer'
        star.addEventListener('click', function () {
            const value = parseInt(star.getAttribute('data-value'));
            voto = value;
            highlightStars(value);
        });
        star.addEventListener('mouseover', function () {
            const value = parseInt(star.getAttribute('data-value'));
            highlightStars(value);
            
        });
        star.addEventListener("mouseout", function(){
            highlightStars(voto);
            console.log("test")
        } )
    }

});

function highlightStars(value) {
    const stars = document.querySelectorAll('.star');
    stars.forEach(function (star) {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= value) {
            star.style.color = '#00FFFF'; // Cambia il colore della stella in oro
        } else {
            star.style.color = 'black'; // Ripristina il colore normale della stella
        }
    });
}