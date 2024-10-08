//OPERADORES LOGICOS
const consola = document.getElementById("consola");

export function operadorLogicoY(){
    let dia = parseInt(prompt('Ingrese el Día:'));
    let mes = parseInt(prompt('Ingrese el Mes:'));
    let año = parseInt(prompt('Ingrese el Año:'));

    // Verificar si es Navidad
    if (dia == 25 && mes == 12) {
        
        // document.write('Estamos en Navidad!');
        consola.innerHTML = 'Estamos en Navidad!';
    } else {
       
        // document.write('Es: ' + dia + '/' + mes + '/' + año);
        consola.innerHTML = 'Es: ' + dia + '/' + mes + '/' + año;
    }

    return `
    let dia = parseInt(prompt('Ingrese el Dia:'));
    let mes = parseInt(prompt('Ingrese el Mes:'));
    let año = parseInt(prompt('Ingrese el Año:'));

    if (dia == 25 && mes == 12) {
        document.write('Estamos en Navidad!'); 
    } else {
        document.write('Es: ' + dia + '/' + mes + '/' + año); 
    }
    `;
};

export function operadorLogicoO(){
    let valor1 = parseInt(prompt("Ingrese el valor 1:"));
    let valor2 = parseInt(prompt("Ingrese el valor 2:"));
    let valor3 = parseInt(prompt("Ingrese el valor 3:"));

    // Verificar si alguno de los valores es menor a 10
    if (valor1 < 10 || valor2 < 10 || valor3 < 10) {
       
        // document.write("Alguno de los valores es menor a 10");
        consola.innerHTML = "Alguno de los valores es menor a 10";
    } else {
        
        // document.write("Todos los valores son mayores a 10");
        consola.innerHTML = "Todos los valores son mayores a 10";
    }

    return `
    let valor1 = parseInt(prompt("Ingrese el valor 1:"));
    let valor2 = parseInt(prompt("Ingrese el valor 2:"));
    let valor3 = parseInt(prompt("Ingrese el valor 3:"));

    if (valor1 < 10 || valor2 < 10 || valor3 < 10) {
        document.write("Alguno de los valores es menor a 10"); 
    } else {
        document.write("Todos los valores son mayores a 10"); 
    }
    `;
};

export function expresionesRegulares(){
    let valor = prompt('Ingrese un número con el formato (999.99):');
    let patron = /^[0-9]{3}\.[0-9]{2}$/;

    // Verificar si el valor coincide con el patrón
    if (patron.test(valor)) {

        // document.write('El valor es correcto');
        consola.innerHTML = 'El valor es correcto';
    } else {
      
        // document.write('El valor no tiene el formato correcto');
        consola.innerHTML = 'El valor no tiene el formato correcto';
    }

    return `
    let valor = prompt('Ingrese un nro con el formato (999.99):');
    let patron = /^[0-9]{3}\\.[0-9]{2}$/;

    if (patron.test(valor)) {
        document.write('El valor es correcto'); 
    } else {
        document.write('El valor no tiene el formato correcto'); 
    }
    `;
};
