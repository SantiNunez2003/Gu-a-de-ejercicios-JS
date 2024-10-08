//Programacion Orientada a Objetos
const contenedor = document.getElementById("codigo");

contenedor.innerHTML = `
    <script>
        function Suma(valor1, valor2) {
            this.valor1 = valor1;
            this.valor2 = valor2;
            this.primerValor = function(valor1) {
                this.valor1 = valor1;
            }
            this.segundoValor = function(valor2) {
                this.valor2 = valor2;
            }
            this.retornarResultado = function() {
                return this.valor1 + this.valor2;
            }
        }

        let suma1;
        suma1 = new Suma(5, 10);
        document.write('La suma de 5 y 10 es:' + suma1.retornarResultado() + '<br>');
        suma1.primerValor(70);
        suma1.segundoValor(30);
        document.write('La suma de 70 y 30 es:' + suma1.retornarResultado() + '<br>');
    </script>
`;


//Defincion de varias clases
contenedor.innerHTML = `
    <script>
        //Clase PERSONA
        function Persona() {
            this.nombre = prompt('Ingrese nombre de la persona:');
            this.edad = parseInt(prompt('Ingrese edad:'));
        }

        //Clase EMPRESA
        function Empresa() {
            this.edadTope = 60;
            this.entrada = function(per) {
                if (per.edad >= this.edadTope)
                    return true;
                else
                    return false;
            }
        }

        // bloque principal
        let per1 = new Persona();
        let per2 = new Persona();
        let per3 = new Persona();
        let empresa = new Empresa();
        let cant = 0;
        if (empresa.entrada(per1))
            cant++;
        if (empresa.entrada(per2))
            cant++;
        if (empresa.entrada(per3))
            cant++;
        document.write('La cantidad de personas que no pueden entrar por su edad a la empresa son:' + cant);
    </script>
`;

//Vectores con componentes de tipo objeto
contenedor.innerHTML = `
    <script>
        function Persona(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
            this.imprimirNombre = function() {
                document.write(this.nombre + ' que tiene una edad ' + this.edad + '<br>');
            }
        }

        let vector = new Array(4);
        vector[0] = new Persona('juan', 44);
        vector[1] = new Persona('ana', 22);
        vector[2] = new Persona('pedro', 44);
        vector[3] = new Persona('marcos', 18);
        let posmayor = 0;
        for (let f = 1; f < vector.length; f++) {
            if (vector[f].edad > vector[posmayor].edad) {
                posmayor = f;
            }
        }
        document.write('Personas con mayor edad:<br>');
        for (let f = 0; f < vector.length; f++) {
            if (vector[f].edad == vector[posmayor].edad) {
                vector[f].imprimirNombre();
            }
        }
    </script>
`;

//Creacion de Objetos literales
contenedor.innerHTML = `
    <script>
        var jugador1 = {
        nombre: 'ana',
        puntos: 0,
        imprimir: function() {
            document.write('Nombre:'+this.nombre+'<br>');
            document.write('Puntos:'+this.puntos+'<br>');
        },
        aumentarpuntos: function(cant) {
            this.puntos=this.puntos+cant;
        },
        verificarsigano: function() {
            if (this.puntos>1000)
            {
            document.write('Gano<br>');
            }
        }
        };

        jugador1.imprimir();
        jugador1.aumentarpuntos(500);
        jugador1.verificarsigano();
        jugador1.aumentarpuntos(501);
        jugador1.verificarsigano();  
        jugador1.imprimir();
    </script>
`;

