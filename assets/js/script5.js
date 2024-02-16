document.addEventListener("DOMContentLoaded", function() {
    // Recupera le domande e le risposte corrette
    const questions = JSON.parse(localStorage.getItem("ArrayDomande")) || [];
    const correctAnswers = JSON.parse(localStorage.getItem("ArrayGiuste")) || [];

    const questionsContainer = document.getElementById("questions-container");

    // Itera sulle domande e le risposte corrette
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const correctAnswer = correctAnswers[i];

        // Crea un elemento HTML per la domanda e la sua risposta
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `
            <p>Domanda ${i + 1}: ${question}</p>
            <p>Risposta corretta: ${correctAnswer ? 'Corretta' : 'Sbagliata'}</p>
        `;

        // Evidenzia la risposta dell'utente se è diversa da quella corretta
        if (localStorage.getItem(`rispostaUtente_${i}`)) {
            const userAnswer = JSON.parse(localStorage.getItem(`rispostaUtente_${i}`));
            if (userAnswer !== correctAnswer) {
                questionElement.classList.add("wrong-answer");
            }
        }

        // Aggiungi l'elemento della domanda al contenitore delle domande
        questionsContainer.appendChild(questionElement);
    }
});