/*Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 
X X X X 
O O O O 
X X X X 
O O O O */

let b = 2;

for (let index = 0; index < 2; index++) {
    console.log("xxxx");
    if (index % 1 == 0); {
        console.log("OOOO");
    }
}

/*2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren 
(zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)*/

let summe = 0;
for (let index = 1; index <= 100; index++) {
    if (index % 2 === 0) {
        summe += index;
    }
}
console.log(summe);


/*3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.: 
XX X XX X 
X    X X   X 
X            X
X            X*/


/*for (let index = 0; index < 1; index++) {
    console.log("XXXX");
    console.log("X   X");
    console.log("X   X");
    console.log("X   X");
    console.log("XXXX");
}
*/

let x = 5;
for (let i = 0; i < x; i++) {
    if (i == 0 || i == x - 1) {
        console.log("XXXX");
    } else {
        console.log("X   X")
    }
}

