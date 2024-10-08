//Estructuras switch
const consola = document.getElementById("consola");

export function estSwitch(){
    let palabra;
    palabra = prompt("Ingrese la palabra en español y te respondo en ingles: ");

    switch (palabra) {
        case "casa":
        //document.write("house");
        consola.innerHTML = ("house");
        break;
        case "mesa":
        //document.write("table");
        consola.innerHTML = ("table");
        break;
        case "perro":
        //document.write("dog");
        consola.innerHTML = ("dog");
        break;
        case "gato":
        //document.write("cat");
        consola.innerHTML = ("cat");
        break;
        default:
        //document.write("no ingreso un valor correcto");
        consola.innerHTML = ("no ingreso un valor correcto");
        break;
    
    };

    return ` 
    let palabra;
    palabra = prompt("Ingrese la palabra: ");

    switch (palabra) {
        case "casa":
        document.write("house");
        break;
        case "mesa":
        document.write("table");
        break;
        case "perro":
        document.write("dog");
        break;
        case "gato":
        document.write("cat");
        break;
        default:
        document.write("no ingreso un valor correcto");
        break;
    };
    `;
}
