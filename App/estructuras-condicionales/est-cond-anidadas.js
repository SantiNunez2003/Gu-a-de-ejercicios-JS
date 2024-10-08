//ESTRUCTURAS CONDICIONALES ANIDADAS
const contenedor = document.getElementById("codigo");
//--1--
let num;

num = parseInt(prompt("Ingrese el numero a evaluar: "));

if (num > 0) {
    document.write("El número es positivo");
} else if (num < 0) {
    document.write("El número es negativo");
} else {
    document.write("El número es 0");
};

//Operador Condicional ?:
contenedor.innerHTML = `
    <script>
        let sueldo = parseFloat(prompt('Ingrese el sueldo del trabajador:'));
        sueldo > 10000 ? sueldo = sueldo * 0.90 : sueldo = sueldo * 0.95;
        alert('El sueldo con el descuento es de: ' + sueldo);
    </script>
`;