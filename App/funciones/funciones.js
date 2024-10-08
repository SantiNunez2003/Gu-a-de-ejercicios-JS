const contenedor = document.getElementById("codigo");

//FUNCIONES
function cargarEnteros(){
    let entero1 = parseInt(prompt("Ingrese el Entero Menor: "));
    let entero2 = parseInt(prompt("Ingrese el Entero Mayor: "));

    for (let i = entero1; i <= entero2; i++) {
        let tabla = document.write(i + ' ')
    }
};

//FUNCIONES CON PARAMETROS
//--1--
function enteros(n1,n2,n3){
    return Math.min(n1,n2,n3)
};

let numero1 = parseInt(prompt("Ingrese el primero numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));
let numero3 = parseInt(prompt("Ingrese el tercer numero: "));

let resultado = enteros(numero1, numero2, numero3);
document.write(resultado);

//FUNCIONES QUE RETORNAN UN VALOR
//--1--
function retornarMayor(valor1, valor2, valor3) {
    if (valor1 > valor2 && valor1 > valor3) {
        return valor1;
    } else {
        if ( valor2 > valor3) {
            return valor2;
        } else {
            return valor3;
        }
    }
}

let val1 = parseInt(prompt('Ingrese primer valor:'));
let val2 = parseInt(prompt('Ingrese segundo valor:'));
let val3 = parseInt(prompt('Ingrese tercer valor:'));


let mayor = retornarMayor(val1, val2, val3);
document.write('El mayor de los tres es :' + mayor);

//Funciones: anidadas
contenedor.innerHTML = `
    <script>
        function funcion1(x) {
            function funcion2(y) {
                document.write('Parámetro de la función exterior:' + x + '<br>');
                document.write('Parámetro de la función anidada:' + y + '<br>');
                document.write('variable local de la función exterior:' + z + '<br>');
            }
            let z = 1;
            funcion2(2);
        }
        funcion1(3);
    </script>
`;

//Funciones: objeto argument
contenedor.innerHTML = `
    <script>
        function mayor() {
            let mayor = arguments[0];
            for (let f = 1; f < arguments.length; f++) {
                if (arguments[f] > mayor) {
                    mayor = arguments[f];
                }
            }
            return mayor;
        }

        document.write(mayor(7, 22, 4, 66, 3, 22, 55));
    </script>
`;

//Funciones: setInterval, clearInterval, setTimeout y clearTimeout
contenedor.innerHTML = `
    <p>Esta página redireccionará al periódico www.lanacion.com.ar en 10 segundo</p>

    <script>
        setTimeout(redireccionar, 10000);

        function redireccionar() {
            window.location = 'https://www.google.com';
        }
    </script>
`;

