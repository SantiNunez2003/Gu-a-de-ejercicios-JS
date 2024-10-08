//OPERADORES LOGICOS
const contenedor = document.getElementById("codigo");
//Operadores lógicos && (y) en las estructuras condicionales
let dia = parseInt(prompt('Ingrese el Dia:'))
let mes = parseInt(prompt('Ingrese el Mes:'))
let año = parseInt(prompt('Ingrese el Año:'))

if(dia == 25 && mes == 12){
    document.write('Estamos en Navidad!')
}else{
    document.write('Es: '+ dia +'/'+ mes +'/'+año)
}

//Operadores lógicos || (o) en las estructuras condicionales

let valor1 = parseInt(prompt("Ingrese el valor 1:"));
let valor2 = parseInt(prompt("Ingrese el valor 2:"));
let valor3 = parseInt(prompt("Ingrese el valor 3:"));

if (valor1 < 10 || valor2 < 10 || valor3 < 10) {
    document.write("Alguno de los valores es menor a 10");
} else {
    document.write("Todos los valores son mayor a 10");
}

//Expresiones regulares 
contenedor.innerHTML = `
    <script>
        let valor = prompt('Ingrese un nro con el formato (999.99):');
        let patron = /^[0-9]{3}\.[0-9]{2}$/;
        if (patron.test(valor))
            document.write('El valor es correcto');
        else
            document.write('El valor no tiene el formato correcto');
    </script>
`;