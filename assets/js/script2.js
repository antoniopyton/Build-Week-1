let domande = 0;
let countdownInterval;

const mostraDomanda = (elemento) => {
  clearTimeout(countdownInterval);
  const domandeElement = document.getElementById("domande");
  domandeElement.innerText = elemento.question;

  const risposteSbagliate = document.querySelectorAll(".btn");
  risposteSbagliate.forEach((button, i) => {
    if (elemento.incorrect_answers[i] != null) {
      button.innerHTML = elemento.incorrect_answers[i];
      button.style.display = "inline-block"; // Assicura che il pulsante sia visibile
    } else {
      button.style.display = "none"; // Nasconde solo i pulsanti con risposte non definite
    }
  });

  const rispostaGiusta = document.getElementById("btnDue");
  rispostaGiusta.innerHTML = elemento.correct_answer;

  const numeroQuestion = document.getElementById("numeroQuestionId");
  numeroQuestion.innerText = domande + 1;

  timer(); // Avvia il timer solo quando viene mostrata una nuova domanda
};

const PROCEED = () => {
  domande++;
  if (domande >= questions.length) {
    window.location.href = "index3.html"; // Reindirizza a index3.html quando le domande sono finite
    return;
  }
  
  const elementoDomandaSuccessiva = questions[domande];
  mostraDomanda(elementoDomandaSuccessiva);
};

const timer = () => {
  let countdown = 10;
  let progressbarCircle = document.querySelector(".progressbar-progress");

  const updateTimer = () => {
    document.querySelector(".progressbar-text").textContent = countdown;

    let percentCompleted = (countdown / 10) * 100;
    let dashOffset = 502 - (502 * percentCompleted) / 100;
    progressbarCircle.style.strokeDashoffset = dashOffset;

    countdown--;

    if (countdown < 0) {
      PROCEED(); // Passa automaticamente alla domanda successiva quando il timer arriva a 0
    } else {
      countdownInterval = setTimeout(updateTimer, 1000);
    }
  };

  updateTimer();
};

const bottoneAvanti = document.getElementById("bottone");
bottoneAvanti.addEventListener("click", PROCEED);

mostraDomanda(questions[domande]);