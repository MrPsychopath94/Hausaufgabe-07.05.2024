function pruefeSchaltjahr(jahr) {
  if (jahr % 4 !== 0) {
    return false;
  }

  if (jahr % 100 === 0) {
    if (jahr % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }

  return true;
}

function aktualisiereErgebnis(jahr, istSchaltjahr) {
  const ergebnisbereich = document.getElementById("ergebnisbereich");
  ergebnisbereich.innerHTML = `Das Jahr ${jahr} ist ${
    istSchaltjahr ? "ein Schaltjahr" : "kein Schaltjahr"
  }`;
}

document.getElementById("jahresEingabe").addEventListener("input", function () {
  const jahrEingabe = document.getElementById("jahresEingabe");
  const jahr = parseInt(jahrEingabe.value);

  if (isNaN(jahr)) {
    aktualisiereErgebnis(jahr, false);
    return;
  }

  const istSchaltjahr = pruefeSchaltjahr(jahr);
  aktualisiereErgebnis(jahr, istSchaltjahr);
});
let button3 = document.getElementById("Bild");

button3.onclick = function () {
  if (bildElement.style.display === "none") {
    bildElement.style.display = "block";
  } else {
    bildElement.style.display = "none";
  }
};
