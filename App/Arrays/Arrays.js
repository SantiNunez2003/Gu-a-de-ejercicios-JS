
const contenedor = document.getElementById("codigo");

//Arrays diferentes formas de crearlos
contenedor.innerHTML = `
    <script>
        let meses = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre');
        let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado', 'domingo'];
        for (let f = 0; f < meses.length; f++) {
            document.write(meses[f] + '<br>');
        }
        document.write('<br>');
        for (let f = 0; f < dias.length; f++) {
            document.write(dias[f] + '<br>');
        }
    </script>
`;

//Arrays densos - todos los datos son cargados de forma continua, no hay espacios vacios
contenedor.innerHTML = `
    <script>
        let vec1 = [];
        for (let f = 0; f < 10; f++) {
            vec1[f] = parseInt(1 + (Math.random() * 500));
        }
        let vec2 = [];
        let vec3 = [];
        let indice1 = 0;
        let indice2 = 0;
        for (let f = 0; f < vec1.length; f++) {
            if (vec1[f] < 250) {
                vec2[indice1] = vec1[f];
                indice1++;
            } else {
                vec3[indice2] = vec1[f];
                indice2++;
            }
        }
        document.write('Tamaño del primer vector' + vec1.length + '<br>');
        document.write('Tamaño del segundo vector' + vec2.length + '<br>');
        document.write('Tamaño del tercer vector' + vec3.length + '<br>');
        document.write('Elementos del primer vector.<br>');
        for (let f = 0; f < vec1.length; f++) {
            document.write(vec1[f] + '-');
        }
        document.write('<br>');
        document.write('Elementos del segundo vector.<br>');
        for (let f = 0; f < vec2.length; f++) {
            document.write(vec2[f] + '-');
        }
        document.write('<br>');
        document.write('Elementos del tercer vector.<br>');
        for (let f = 0; f < vec3.length; f++) {
            document.write(vec3[f] + '-');
        }
    </script>
`;

//Arrays dispersos - los datos estan ubicados de forma aleatoria en el array y tiene espacios en vacio
contenedor.innerHTML = `
    <script>
        let carton = [];
        let cant = 0;
        do {
            let premio = parseInt(Math.random() * 1000);
            carton[premio] = 1000 * (cant + 1);
            cant++;
        } while (cant != 11);
        for (let f = 0; f < carton.length; f++) {
            if (carton[f] != undefined) {
                document.write('Carton ' + f + ' tiene un premio de ' + carton[f] + '<br>');
            }
        }
    </script>
`;

//Array metodos (push) y (pop)
contenedor.innerHTML = `
    <script>
        let vec = [];
        for (let f = 0; f < 5; f++) {
            let nro = 1 + (Math.random() * 1000);
            vec.push(parseInt(nro));
        }
        for (let f = 0; f < vec.length; f++) {
            document.write(vec[f] + '<br>');
        }
        let sumaultimos = vec.pop() + vec.pop();
        document.write('La suma de las dos últimas componentes es:' + sumaultimos + '<br>');
        document.write('Tamaño final del vector:' + vec.length + '<br>');
        document.write('Elementos restantes del vector<br>');
        for (let f = 0; f < vec.length; f++) {
            document.write(vec[f] + '<br>');
        }
    </script>
`;

//Array metodos (sort) y (reverse)
contenedor.innerHTML = `
    <script>
        let sueldos = [];
        let valor;
        do {
            valor = parseInt(prompt('Ingrese el sueldo (cero para finalizar)'));
            if (valor != 0)
                sueldos.push(valor);
        } while (valor != 0);

        sueldos.sort(function(x, y) {
            if (x > y)
                return 1;
            else
                return -1;
        });

        document.write('Sueldos ordenados de menor a mayor<br>');
        for (let f = 0; f < sueldos.length; f++) {
            document.write(sueldos[f] + '<br>');
        }
        sueldos.reverse();
        document.write('Sueldos ordenados de mayor a menor<br>');
        for (let f = 0; f < sueldos.length; f++) {
            document.write(sueldos[f] + '<br>');
        }
    </script>
`;

//Array metodo (splice) 
contenedor.innerHTML = `
    <script>
        let vec = [0, 7, 2, 3, 4, 2, 6, 2, 8, 2];
        document.write('vector original<br>');
        for (let f = 0; f < vec.length; f++) {
            document.write(vec[f] + ' ');
        }
        let indice = 0;
        do {
            if (vec[indice] == 2) {
                vec.splice(indice, 1, 1, 1);
            }
            indice++;
        } while (indice < vec.length);
        document.write('<br>vector modificado<br>');
        for (let f = 0; f < vec.length; f++) {
            document.write(vec[f] + ' ');
        }
    </script>

`;

//Array metodo (join)
contenedor.innerHTML = `
    <script>
        let nombres = new Array(5);
        for (let f = 0; f < nombres.length; f++) {
            nombres[f] = prompt('Ingrese un nombre:');
        }
        document.write(nombres.join('<br>'));
    </script>
`;

//Array metodo (toString)
contenedor.innerHTML = `
    <script>
        let vec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let cadena1 = vec.toString();
        let cadena2 = vec.join();
        if (cadena1 == cadena2)
            document.write('son iguales los dos string');
        else
            document.write('no son iguales los dos string');
    </script>
`;

