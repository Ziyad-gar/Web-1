
let HeureAJ = new Date().getHours();

function LaDateDuJour(hour) {
  if (hour >= 5 && hour < 12) {
    return "Le matin.";
  } else if (hour >= 12 && hour < 18) {
    return "L'après-midi.";
  } else {
    return "Le soir.";
  }
}

let X = LaDateDuJour(HeureAJ);

alert("Bonjour! " + X);


