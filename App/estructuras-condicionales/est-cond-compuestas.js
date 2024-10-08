//ESTRUCTURAS CONDICIONALES COMPUESTAS
const consola = document.getElementById("consola");

export function estCondicionalCompuesta(){
    //--1--
    let num1, num2;
    num1 = parseInt(prompt("Ingrese el primer número:"));
    num2 = parseInt(prompt("Ingrese el segundo número:"));
    if (num1 > num2) {
        let sumaN1N2 = num1 + num2;
        let diferencia = num1 - num2;

        consola.innerHTML = `Su suma es: ${sumaN1N2} Su diferencia es: ${diferencia}`;
    } else {
        let productoN1N2 = num1 * num2;
        let divisionN1N2 = num1 / num2;
        consola.innerHTML = `el mayor es ${num2}`;
    }

    return ` 
    let num1, num2;
    num1 = parseInt(prompt("Ingrese el primer número:"));
    num2 = parseInt(prompt("Ingrese el segundo número:"));
    if (num1 > num2) {
        let sumaN1N2 = num1 + num2;
        let diferencia = num1 - num2;
        document.write("Su suma es:  " + sumaN1N2 + 'Su diferencia es: ' + diferencia);
    } else {
        let productoN1N2 = num1 * num2;
        let divisionN1N2 = num1 / num2;
        document.write("el mayor es " + num2);
    }
    `;
}


