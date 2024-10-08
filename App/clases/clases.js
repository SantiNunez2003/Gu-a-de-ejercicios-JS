//CLASE DATE
function mostrarCuatrimestre(){
    let fecha = new Date()
    let mes = fecha.getMonth() + 1;
    let cuatrimestre;

    if(mes >= 1 && mes <= 4){
        cuatrimestre = ("Primer Cuatrimestre");
    }else if(mes >= 5 && mes <= 8){
        cuatrimestre = ("Segundo Cuatrimestre");
    }else{
        cuatrimestre = ("Tercer Cuatrimestre");
    }

    document.write("Estamos en el: " + cuatrimestre);
}

//CLASE ARRAY
//--2--
//Interamos para cargar lo datos en base a la longitud del vector
function cargarVectores(vec1, vec2) {

    for (let i = 0; i < vec1.length; i++) {
        let valor = prompt('Ingrese componente del primer vector:', '');
        vec1[i] = parseInt(valor);
    }

    for (let i = 0; f < vec2.length; i++) {
        let valor = prompt('Ingrese componente del segundo vector:', '');
        vec2[i] = parseInt(valor);
    }
}

//Con los vectores hacemos la suma 
function sumarVectores(vec1, vec2, vecsuma) {
    for (let i = 0; i < vecsuma.length; i++) {
        vecsuma[i] = vec1[i] + vec2[i];
    }
}

function imprimirVector(vecsuma) {
    for (let i = 0; i < vecsuma.length; f++) {
        document.write(vecsuma[i] + ' ');
    }
}

let vec1 = new Array(3);
let vec2 = new Array(3);
let vecsuma = new Array(3);
cargarVectores(vec1, vec2);
sumarVectores(vec1, vec2, vecsuma);
imprimirVector(vecsuma);

//CLASE MATH
//--1--
let valor = parseInt(prompt('Ingrese un valor:'));
let resultado = Math.pow(valor, 3);

document.write('El valor ' + valor + ' elevado a la 3 es ' + resultado);

//CLASE STRING
//--1--
let nombre;
let contador = 0;
do {
    nombre = prompt('Ingrese un nombre (Terminar ingresando Fin):');
    contador++;
} while (nombre != 'Fin');

//para descontar la palabra Fin
contador--;
document.write('Se ingresaron ' + cant + ' palabras');