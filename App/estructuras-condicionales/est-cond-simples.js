//ESTRUCTURAS CONDICIONALES SIMPLES
const consola = document.getElementById("consola");

export function estCondicionalSimple(){

    let nota1, nota2, nota3, suma_notas, promedio;
    nota1 = parseInt(prompt("Ingrese nota 1:"));
    nota2 = parseInt(prompt("Ingrese nota 2:"));
    nota3 = parseInt(prompt("Ingrese nota 3:"));

    suma_notas = nota1 + nota2 + nota3;
    promedio = suma_notas / 3;

    if (promedio >= 7) {
        consola.innerHTML = ("Promocionado");
    };

    if (promedio < 7) {
        consola.innerHTML = ("Reprobado");
    };

    return ` 
    let nota1, nota2, nota3, suma_notas, promedio;
    nota1 = parseInt(prompt("Ingrese nota 1:"));
    nota2 = parseInt(prompt("Ingrese nota 2:"));
    nota3 = parseInt(prompt("Ingrese nota 3:"));

    suma_notas = nota1 + nota2 + nota3;
    promedio = suma_notas / 3;

    if (promedio >= 7) {
    document.write("Promocionado");
    };

    if (promedio < 7) {
        consola.innerHTML = ("Reprobado");
    };
    `;

}

/*
//--2--
let clave1, clave2;
clave1 = parseInt(prompt("Ingrese clave 1:"));
clave2 = parseInt(prompt("Ingrese clave anterior:"));

if(clave1 == clave2){
    document.write('Es correcto')
};*/