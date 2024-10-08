//VARIABLES
const consola = document.getElementById("consola");

export function variables(){
    let nombre_empleado = "Empleado Santiago";
    let sueldo = 21000;

    consola.innerHTML = (nombre_empleado + "<br>" + sueldo);
    
    return ` 
    const consola = document.getElementById("consola");

    let nombre_empleado = "Empleado Santiago";
    let sueldo = 21000;

    consola.innerHTML = (nombre_empleado + "<!--<br>-->" + sueldo);
    `;
}