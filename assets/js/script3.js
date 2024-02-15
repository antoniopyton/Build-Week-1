const ArrayDomandeJSON = localStorage.getItem("LunghezzaArrayDomande");

const ArrayDomande = JSON.parse(ArrayDomandeJSON);
console.log(ArrayDomande.length);

// Recupera le risposte corrette memorizzate localmente
const risposteGiusteJSON = localStorage.getItem("ArrayGiuste");
const arrayRisposteGiuste = JSON.parse(risposteGiusteJSON);
console.log(arrayRisposteGiuste);

// Calcola il numero di risposte corrette e sbagliate
const risposteCorrette = arrayRisposteGiuste.filter(
  (risposta) => risposta === true
).length;
const risposteSbagliate = 10 - risposteCorrette;

// Dati per il grafico a ciambella
const dati = {
  datasets: [
    {
      data: [risposteSbagliate, risposteCorrette],
      backgroundColor: ["#41FFFF", "#C2128D"],
      borderWidth: 0,
    },
  ],
};

// Opzioni del grafico
const opzioni = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: 170, // Aumenta lo spazio interno alla ciambella
};

// Ottieni il riferimento al canvas
const ctx = document.getElementById("myChart").getContext("2d");

// Crea il grafico a ciambella
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: dati,
  options: opzioni,
});

const percenCorrette = document.getElementById("percentualeCorrette");
percenCorrette.innerText = `${
  (risposteCorrette / ArrayDomande.length) * 100
}  %`;

const numCorrette = document.getElementById("numCorrette");
numCorrette.innerText = `${risposteCorrette}/${ArrayDomande.length}  `;

const percenIncorrette = document.getElementById("percentualeIncorrette");
percenIncorrette.innerText = `${
  ((ArrayDomande.length - risposteCorrette) / ArrayDomande.length) * 100
}  %`;
const numIncorrette = document.getElementById("numIncorrette");

numIncorrette.innerText = `${ArrayDomande.length - risposteCorrette}/${
  ArrayDomande.length
}`;

const btnpg4 = document.getElementById("pg4");
btnpg4.addEventListener("click", function () {
  window.location.href = "index4.html";
});
