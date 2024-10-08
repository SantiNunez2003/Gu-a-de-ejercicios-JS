//ESTRUCTURAS CONDICIONALES ANIDADAS
const consola = document.getElementById("consola");

//--1--
export function estCondicionalAnidadas(){
    let num;

    num = parseInt(prompt("Ingrese el numero a evaluar: "));

    if (num > 0) {
        //document.write("El número es positivo");
        consola.innerHTML = ("El número es positivo");
    } else if (num < 0) {
        //document.write("El número es negativo");
        consola.innerHTML = ("El número es negativo");
    } else {
        //document.write("El número es 0");
        consola.innerHTML = ("El número es 0");
    };

    return ` 
    let num;

    num = parseInt(prompt("Ingrese el numero a evaluar: "));

    if (num > 0) {
        document.write("El número es positivo");
    } else if (num < 0) {
        document.write("El número es negativo");
    } else {
        document.write("El número es 0");
    };
    `;
};


//Operador Condicional ?:
export function estOperadorConsicional(){

    let sueldo = parseFloat(prompt('Ingrese el sueldo del trabajador:'));

    sueldo > 10000 ? sueldo = sueldo * 0.90 : sueldo = sueldo * 0.95;

    //document.write('El sueldo con el descuento es de: ' + sueldo);
    consola.innerHTML = (`El sueldo con el descuento es de: ${sueldo}`)

    return ` 
    let sueldo = parseFloat(prompt('Ingrese el sueldo del trabajador:'));

    sueldo > 10000 ? sueldo = sueldo * 0.90 : sueldo = sueldo * 0.95;

    document.write('El sueldo con el descuento es de: ' + sueldo);
    `;
}

