//ESTRUCTURAS SECUENCIALES

//--1--
let lado;
lado = parseInt(prompt("Ingrese tamaño del lado de un cuadrado:"));
document.write("<br> El perimetro del cuadrado es: ", lado * 4);

//--2--
let numero1, numero2, numero3, numero4;
n1 = parseInt(prompt("Ingrese Numero 1:"));
numero2 = parseInt(prompt("Ingrese Numero 2:"));
numero3 = parseInt(prompt("Ingrese Numero 3:"));
numero4 = parseInt(prompt("Ingrese Numero 4:"));

suma = numero1 + numero2;
producto = numero3 * numero4;

document.write(
    "La suma de los dos primero:" +
    suma +
    "<br>" +
    "El producto del tercero con el cualto es: " +
    producto
);


//--3--
let x = 1;
let suma_valores = 0;
let producto_valores = 1;
let valor;
while (x <= 4) {
    valor = parseInt(prompt('Ingrese valor:'));
    suma_valores = suma_valores + valor;
    producto_valores = producto_valores * valor
    x = x + 1;
}
document.write('La suma de los valores es ' + suma_valores + '<br>' + 'La multiplicacion de los valores es:' + producto_valores);


//--4--
let precio, cantidad, total;
precio = parseInt(prompt("Ingrese precio:"));
cantidad = parseInt(prompt("Ingrese cantidad:"));
total = precio * cantidad
document.write("Abonar: ", total);

