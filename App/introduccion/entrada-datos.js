//ENTRADA DE DATOS POR PROMT
const consola = document.getElementById("consola");

export function entradaDatos(){
    let nombre, edad;
   
    nombre = prompt('Ingrese su nombre:');
    edad = prompt('Ingrese su edad: ');

    //document.write('Hola! '+ nombre + ', wow tienes: ' + edad + 'Años!!');

    consola.innerHTML = `Hola! ${nombre}, wow tienes: ${edad} Años!!`

    return ` 
    let nombre, edad;
   
    nombre = prompt('Ingrese su nombre:');
    edad = prompt('Ingrese su edad: ');

    document.write('Hola! '+ nombre + ', wow tienes: ' + edad + 'Años!!');
    `;
}
