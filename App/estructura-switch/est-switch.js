//Estructuras switch

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