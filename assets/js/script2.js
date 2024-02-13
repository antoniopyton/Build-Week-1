
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
                  "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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
        
              timer = () => {
                let countdown = 10; // Imposta il tempo di countdown in secondi
                let progressbarCircle = document.querySelector(".progressbar-progress"); //mettiamo su html elemento corrispondente
                let testo = document.createElement("p"); //Aggiungiamo nel timer la scritta "seconds"
                // testo.innerText = "seconds";
                // countdown.appendchild(testo);
                let indiceDomandaCorrente = 0;
const domandaElement = document.getElementById("domanda");
const bottoneAvanti = document.getElementById("bottone");

// Funzione per mostrare la domanda corrente
function mostraDomanda() {
  domandaElement.textContent = questions[indiceDomandaCorrente].question;
}

// Funzione per passare alla domanda successiva
function PROCEED() {
  indiceDomandaCorrente++;
  if (indiceDomandaCorrente >= questions.length) {
    indiceDomandaCorrente = 0; // Se si raggiunge la fine delle domande, torna alla prima domanda
  }
  mostraDomanda();
}
// Mostra la prima domanda all'avvio
mostraDomanda();
// Gestore dell'evento click per il bottone
bottoneAvanti.addEventListener("click", PROCEED);
              
                let countdownInterval = setInterval(function () {
                  // Aggiorna il testo del countdown
                  document.querySelector(".progressbar-text").textContent = countdown;
              
                  // Calcola la percentuale completata del countdown
                  let percentCompleted = (countdown / 10) * 100;
              
                  // Calcola l'offset del dash in base alla percentuale completata
                  let dashOffset = 502 - (502 * percentCompleted) / 100;
              
                  // Aggiorna l'offset del dash della barra di scorrimento
                  progressbarCircle.style.strokeDashoffset = dashOffset;
              
                  //   // Diminuisci il contatore di 1 secondo
                  countdown--;
              
                  // Se il countdown è arrivato a 0, ferma il setInterval
                  if (countdown < 0) {
                    clearInterval(countdownInterval);
                    setTimeout(function () {
                      timer();
                    }, 2000);
                  }
                }, 1000); // Esegui la funzione ogni secondo (1000 millisecondi)
              };
              
              timer();
              
        
            window.onload = function () {
                estraiDomanda();
                PROCEED();

        
             
            };



 estraiDomanda = () => { // Dichiaro la funzione per estrarre la domanda
     const randomIndex = Math.floor(Math.random() * questions.length); // Andiamo ad estrarre una domanda randomicamente
     return questions[randomIndex] // Dichiariamo la variabile elemento per non doverla richiamare ogni volta
     

 }
 let elemento = estraiDomanda();
//  let undefined;

 /*stampaDomanda = (elemento) => {
    const domande = document.getElementById("domande");
   domande.innerText = elemento.question;
   const risposteSbagliate = document.getElementsByClassName("btn")
   for (let i = 0; i < risposteSbagliate.length; i++) {
    risposteSbagliate[i].innerHTML = elemento.incorrect_answers[i]
}
const rispostaGiusta = document.getElementById("btnDue");
   rispostaGiusta.innerHTML = elemento.correct_answer; 
}*/

let indiceDomandaCorrente = 0;
const domandaElement = document.getElementById("domanda");
const bottoneAvanti = document.getElementById("bottone");

// Funzione per mostrare la domanda corrente
function mostraDomanda() {
  domandaElement.textContent = questions[indiceDomandaCorrente].question;
}

// Funzione per passare alla domanda successiva
function PROCEED() {
  indiceDomandaCorrente++;
  if (indiceDomandaCorrente >= questions.length) {
    indiceDomandaCorrente = 0; // Se si raggiunge la fine delle domande, torna alla prima domanda
  }
  mostraDomanda();
}
// Mostra la prima domanda all'avvio
mostraDomanda();
// Gestore dell'evento click per il bottone
bottoneAvanti.addEventListener("click", PROCEED);
stampaDomanda(elemento);


//  const rispostaGiusta = document.getElementsByClassName("btn"); //
//       const risposteSbagliate = document.getElementsByClassName("btnDue"); 
//      let domandaEstratta;
//      for (let i = 0; i < questions.length; i++) { // Apro un ciclo per recuperare le domande


//     }
            
         // TIPS:
        
              // SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
              // Per ogni domanda, crea un container e incorporale tutte all'interno. 
              // Crea poi dei radio button
              // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
              // con le risposte corrette e incorrette come opzioni
              // (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale) 
              //
              // SE MOSTRI UNA DOMANDA ALLA VOLTA:
              // Mostra la prima domanda con il testo e i radio button.
              // Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
              // salvando le risposte dell'utente in una variabile
              // Come calcolare il risultato? Hai due strade:
              // Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
              // Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer
        
              // BUON LAVORO 💪🚀