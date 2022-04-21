let nota1;
let nota2;
let nota3;

do {
    prompt("Ingrese nota del primer trimestre");
    if ((nota1 >= 0) && (nota1 <= 10));
    break;
} while ((nota1 < 0) || (nota1 > 10));

do {
    prompt("Ingrese nota del segundo trimestre");
    if ((nota2 >= 0) && (nota2 <= 10));
    break;
} while ((nota2 < 0) || (nota2 > 10));

do {
    prompt("Ingrese nota del tercer trimestre");
    if ((nota3 >= 0) && (nota3 <= 10));
    break;
} while ((nota3 < 0) || (nota3 < 10));

const trimestres = 3;

var sum_notas = (nota1 + nota2 + nota3);

var nota_final = sum_notas / trimestres;

if (nota_final >= 6) {
    alert("¡¡Felicitaciones esta aprobado!!");

} else {
    alert("Desaprobado, debe de rendir recuperatorio");
}


