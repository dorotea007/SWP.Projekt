const readline = require('readline-sync');

// Bankautomat-Simulation

let kontostand = 0; // Start-Kontostand

// Funktion zum Einzahlen
function einzahlen(betrag) {
  if (betrag > 0) {
    kontostand += betrag;
    console.log("Einzahlung erfolgreich. Aktueller Kontostand: " + kontostand);
  } else {
    console.log("Ungültiger Betrag für Einzahlung.");
  }
}

// Funktion zum Abheben
function abheben(betrag) {
  if (betrag > 0 && betrag <= kontostand) {
    kontostand -= betrag;
    console.log("Abhebung erfolgreich. Aktueller Kontostand: " + kontostand);
  } else {
    console.log("Ungültiger Betrag für Abhebung oder nicht ausreichend Guthaben.");
  }
}

// Funktion zum Abfragen des Kontostands
function kontostandAbfragen() {
  console.log("Aktueller Kontostand: " + kontostand);
}

// Hauptfunktion
function bankautomat() {
  let beenden = false;

  while (!beenden) {
    const auswahl = parseInt(readline.question("Bitte wählen Sie eine Option:\n1. Einzahlen\n2. Abheben\n3. Kontostand\n4. Beenden"));

    switch (auswahl) {
      case 1:
        const einzahlenBetrag = parseInt(readline.question("Bitte geben Sie den Einzahlungsbetrag ein:"));
        einzahlen(einzahlenBetrag);
        break;
      case 2:
        const abhebenBetrag = parseInt(readline.question("Bitte geben Sie den Abhebungsbetrag ein:"));
        abheben(abhebenBetrag);
        break;
      case 3:
        kontostandAbfragen();
        break;
      case 4:
        beenden = true;
        console.log("Bankautomat wird beendet.");
        break;
      default:
        console.log("Ungültige Auswahl. Bitte wählen Sie eine der verfügbaren Optionen.");
        break;
    }
  }
}

// Bankautomat starten
bankautomat();
