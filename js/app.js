/*document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
})
    */
let age, ville, nombre, version, chiffre;
const user = 5.4;

age = 15;
ville = new String("Paris");
nombre = null;
version = 1.55555555555555555555;
console.log(parseFloat(version).toFixed(4).length);
const tablang = ["html", 1.5, true];
console.table(tablang);

chiffre = 7;

chiffre % 2 == 0 ? console.log("nombre paire") : console.log("nombre impaire");

age > 18 && nombre == null ? console.log("Vous etes majeur") : console.log("Vous etes mineur");