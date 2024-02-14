const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

  let domande = 0;
let countdownInterval;
const ArrayRisposte = [];

// Funzione per mostrare una domanda
const mostraDomanda = (elemento) => {
    clearTimeout(countdownInterval);
    const domandeElement = document.getElementById("domande");
    domandeElement.innerText = elemento.question;

    mostraRisposte(elemento);
    mostraRispostaGiusta(elemento);
    aggiornaNumeroDomanda();
    avviaTimer();
};

// Funzione per mostrare le risposte sbagliate
const mostraRisposte = (elemento) => {
    const risposteSbagliate = document.querySelectorAll(".btn");
    risposteSbagliate.forEach((button, i) => {
        if (elemento.incorrect_answers[i] != null) {
            button.innerHTML = elemento.incorrect_answers[i];
            button.style.display = "inline-block";
        } else {
            button.style.display = "none";
        }
    });
};

// Funzione per mostrare la risposta corretta
const mostraRispostaGiusta = (elemento) => {
    const rispostaGiusta = document.getElementById("btnDue");
    rispostaGiusta.innerHTML = elemento.correct_answer;
};

// Funzione per aggiornare il numero della domanda
const aggiornaNumeroDomanda = () => {
    const numeroQuestion = document.getElementById("numeroQuestionId");
    numeroQuestion.innerText = domande + 1;
};

// Funzione per avviare il timer
const avviaTimer = () => {
    let countdown = 10;
    let progressbarCircle = document.querySelector(".progressbar-progress");

    const updateTimer = () => {
        document.querySelector(".progressbar-text").textContent = countdown;
        let percentCompleted = (countdown / 10) * 100;
        let dashOffset = 502 - (502 * percentCompleted) / 100;
        progressbarCircle.style.strokeDashoffset = dashOffset;
        countdown--;

        if (countdown < 0) {
            procediConDomandaSuccessiva();
        } else {
            countdownInterval = setTimeout(updateTimer, 1000);
        }
    };

    updateTimer();
};

// Funzione per gestire il click sul pulsante "PROCEED"
const procediConDomandaSuccessiva = () => {
    const rispostaGiusta = document.getElementById("btnDue");
    if (rispostaGiusta.matches(":active, :focus")) {
        ArrayRisposte.push(rispostaGiusta.innerText);
    }
    console.log(ArrayRisposte);
    domande++;

    if (domande >= questions.length) {
        window.location.href = "index3.html";
        return;
    }

    const elementoDomandaSuccessiva = questions[domande];
    mostraDomanda(elementoDomandaSuccessiva);
};

// Funzione per aggiungere un listener al click sul pulsante "PROCEED"
const aggiungiListenerProcedi = () => {
    const bottoneAvanti = document.getElementById("bottone");
    bottoneAvanti.addEventListener("click", procediConDomandaSuccessiva);
};

// Funzione iniziale per mostrare la prima domanda all'avvio
const inizializzaQuiz = () => {
    mostraDomanda(questions[domande]);
    aggiungiListenerProcedi();
};

// Avvia il quiz quando la pagina si carica
document.addEventListener("DOMContentLoaded", inizializzaQuiz);