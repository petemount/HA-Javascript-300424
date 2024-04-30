function fahrkarte(alter) {
  if (alter < 6) {
    console.log("kostenlos");
  } else if (alter >= 6 && alter <= 17) {
    console.log("Kinderpreis");
  } else if (alter >= 18 && alter <= 66) {
    console.log("Vollpreis");
  } else if (alter > 67) {
    console.log("Seniorenpreis");
  }
}

fahrkarte(5);
fahrkarte(15);
fahrkarte(32);
fahrkarte(68);
