const consola = document.getElementById("consola");

//FUNCIONES
export function funcion() {
  function cargarEnteros() {
    let entero1 = parseInt(prompt("Ingrese el Entero Menor: "));
    let entero2 = parseInt(prompt("Ingrese el Entero Mayor: "));
    let resultados = "";

    // Bucle para acumular los números
    for (let i = entero1; i <= entero2; i++) {
      resultados += i + " "; // Acumular números en la cadena
    }

    // Mostrar los resultados en el elemento HTML
    consola.innerHTML = resultados;
  }
  cargarEnteros();

  return ` 
    function cargarEnteros(){
        let entero1 = parseInt(prompt("Ingrese el Entero Menor: "));
        let entero2 = parseInt(prompt("Ingrese el Entero Mayor: "));
    
        for (let i = entero1; i <= entero2; i++) {
            let tabla = document.write(i + ' ')
        }
    };
    cargarEnteros();
    `;
}

//FUNCIONES CON PARAMETROS
//--1--
export function funcionConParametros(){
    function enteros(n1, n2, n3) {
        return Math.min(n1, n2, n3);
    }

    // Solicitar entradas al usuario
    let numero1 = parseInt(prompt("Ingrese el primer número: "));
    let numero2 = parseInt(prompt("Ingrese el segundo número: "));
    let numero3 = parseInt(prompt("Ingrese el tercer número: "));

    // Calcular el resultado
    let resultado = enteros(numero1, numero2, numero3);
    
    // Mostrar el resultado en el elemento HTML
    consola.innerHTML = `El número mínimo es: ${resultado}`;

    // Devolver el código en formato de texto
    return `
    function enteros(n1, n2, n3) {
        return Math.min(n1, n2, n3);
    }

    let numero1 = parseInt(prompt("Ingrese el primero numero: "));
    let numero2 = parseInt(prompt("Ingrese el segundo numero: "));
    let numero3 = parseInt(prompt("Ingrese el tercer numero: "));

    let resultado = enteros(numero1, numero2, numero3);
    document.write(resultado); 
    `;
}

//FUNCIONES QUE RETORNAN ALGO
export function funcionConRetorno(){
    // Función para retornar el mayor de tres valores
    function retornarMayor(valor1, valor2, valor3) {
        if (valor1 > valor2 && valor1 > valor3) {
            return valor1;
        } else {
            if (valor2 > valor3) {
                return valor2;
            } else {
                return valor3;
            }
        }
    }

    // Solicitar entradas al usuario
    let val1 = parseInt(prompt("Ingrese primer valor:"));
    let val2 = parseInt(prompt("Ingrese segundo valor:"));
    let val3 = parseInt(prompt("Ingrese tercer valor:"));

    // Calcular el mayor
    let mayor = retornarMayor(val1, val2, val3);
    
    // document.write("El mayor de los tres es :" + mayor);

    // Mostrar el resultado en el elemento HTML
    consola.innerHTML = "El mayor de los tres es: " + mayor;

    // Devolver el código en formato de texto
    return `
    function retornarMayor(valor1, valor2, valor3) {
        if (valor1 > valor2 && valor1 > valor3) {
            return valor1;
        } else {
            if (valor2 > valor3) {
                return valor2;
            } else {
                return valor3;
            }
        }
    }

    let val1 = parseInt(prompt("Ingrese primer valor:"));
    let val2 = parseInt(prompt("Ingrese segundo valor:"));
    let val3 = parseInt(prompt("Ingrese tercer valor:"));

    let mayor = retornarMayor(val1, val2, val3);
    document.write("El mayor de los tres es :" + mayor); 
    `;
}

//FUNCIONES: ANIDADAS
export function funcionesAnidadas(){
    function funcion1(x) {
        function funcion2(y) {
    
            // document.write('Parámetro de la función exterior: ' + x + '<br>');
            // document.write('Parámetro de la función anidada: ' + y + '<br>');
            // document.write('Variable local de la función exterior: ' + z + '<br>');
            
            // Mostrar resultados en el elemento HTML
            consola.innerHTML += 'Parámetro de la función exterior: ' + x + '<br>';
            consola.innerHTML += 'Parámetro de la función anidada: ' + y + '<br>';
            consola.innerHTML += 'Variable local de la función exterior: ' + z + '<br>';
        }

        let z = 1;
        funcion2(2);
    }
    funcion1(3);

    return `
    function funcion1(x) {
        function funcion2(y) {
            document.write('Parámetro de la función exterior: ' + x + '<br>');
            document.write('Parámetro de la función anidada: ' + y + '<br>');
            document.write('Variable local de la función exterior: ' + z + '<br>');
        }
        let z = 1;
        funcion2(2);
    }
    funcion1(3);
    `;
}


//FUNCIONES: OBJET ARGUMENT
export function funcionesObjetoArgument(){
    function mayor() {
        let mayor = arguments[0];
        for (let f = 1; f < arguments.length; f++) {
            if (arguments[f] > mayor) {
                mayor = arguments[f];
            }
        }
        return mayor;
    }

    // document.write(mayor(7, 22, 4, 66, 3, 22, 55));

    // Mostrar el resultado en el elemento HTML
    consola.innerHTML = "El mayor es: " + mayor(7, 22, 4, 66, 3, 22, 55);

    // Devolver el código en formato de texto
    return `
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
    `;
}


//Funciones: setInterval, clearInterval, setTimeout y clearTimeout
export function funcionesTime(){
    
    let mensaje = "Esta página redireccionará al periódico www.lanacion.com.ar en 10 segundos."

    // Redireccionar después de 10 segundos
    setTimeout(redireccionar, 10000);

    function redireccionar() {
        window.location = 'https://www.google.com';
    }

    //document.write(mensaje)
    consola.innerHTML = (mensaje)

    // Devolver el código en formato de texto
    return `
    Esta página redireccionará al periódico www.lanacion.com.ar en 10 segundos.

    setTimeout(redireccionar, 10000);

    function redireccionar() {
        window.location = 'https://www.google.com';
    }
    `;
}
