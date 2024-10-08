//Estructuras repetivas 
const consola = document.getElementById("consola");

export function estRepetitivaWhile(){
    //WHILE
    //--1--
    let a = 11;

    x = 1;
    while (x <= 25) {
        //document.write(a + "-");
        consola.innerHTML =  `${a} - `;
        x = x + 1;
        a = a + 11;
    }

    return ` 
    let a = 11;

    x = 1;
    while (x <= 25) {
        document.write(a + "-");
        x = x + 1;
        a = a + 11;
    }
    `;
}

export function conceptoAcumulador(){
    //Concepto de acumulador
    let x = 0, notas, contador_7 = 0, contador_menores = 0;

    while (x !== 10) {
        notas = parseInt(prompt("Ingrese nota:"));

        if (notas >= 7) {
        contador_7++;
        } else {
        contador_menores++;
        }

        x = x + 1;
    }
    /*
     document.write(
        "Hay: " +
        contador_7 +
        " con notas mayores a 7 <br> Hay: " +
        contador_menores +
        " con notas menores a 7"
    );
    */
   consola.innerHTML = 
}





//DO/WHILE
//--1--
let valor;
let suma = 0;

do {
    valor = parseInt(prompt('Ingrese un valor (9999 para finalizar)'));
    if (valor != 9999) {
        suma = suma + valor;
    }
} while (valor != 9999);
document.write('Total:' + suma);
document.write('<br>');

if (suma > 0) {
    document.write('El valor acumulado es mayor a cero');
} else {
    if (suma == 0) {
        document.write('El valor acumulado es cero');
    } else {
        document.write('El valor acumulado es menor a cero');
    }
}

//FOR
let contador = 0;

for (let i = 1; i <= 3; i++) {
    
    let base = parseInt(prompt('Ingrese la base:'));
    let altura = parseInt(prompt('Ingrese la altura:'));
    let superficie = base * altura / 2;
    
    if (superficie > 12) {
        contador++;
    }
    document.write('Triángulo nro:' + i + '<br>');
    document.write('Base:' + base + '<br>');
    document.write('Altura:' + altura + '<br>');
    document.write('Superficie:' + superficie + '<br>');
}
document.write('Cantidad de triángulos con superficie mayor a 12:' + contador);

