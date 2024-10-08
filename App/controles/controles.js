//Funciones y Eventos
//--1--
const contenedor = document.getElementById("codigo");

contenedor.innerHTML = `
    <form>
        <input type="button" onClick="presion1()" value="Boton 1">
        <input type="button" onClick="presion2()" value="Boton 2">
        <input type="button" onClick="presion3()" value="Boton 3">
    </form>

    <script>
        function presion1() {
            alert('Se presionó el botón 1');
        }

        function presion2() {
            alert('Se presionó el botón 2');
        }

        function presion3() {
            alert('Se presionó el botón 3');
        }
    </script>`
;

//FORM, BUTTON y TEXT
//--1--
contenedor.innerHTML = `
    <form>
        <p>Ingrese un valor:<input type="text" id="numero"></p>
        <p><input type="button" value="Calcular cubo" onClick="calcularCubo()"></p>
    </form>

    <script>
        function calcularCubo() {
            let v = document.getElementById('numero').value;
            v = parseInt(v);
            let cubo = v * v * v;
            alert(cubo);
        }
    </script>`;

//Control PASSWORD
contenedor.innerHTML = ` 
    <form>
        Ingrese clave:
        <input type="password" id="clave1">
        <br> Repita la clave:
        <input type="password" id="clave2">
        <br>
        <input type="button" onClick="verificar()">
    </form>

    <script>
        function verificar() {
            let clave1 = document.getElementById('clave1').value;
            let clave2 = document.getElementById('clave2').value;
            if (clave1 == clave2) {
                alert('Las dos claves ingresadas son iguales');
            } else {
                alert('Las dos claves ingresadas son distintas');
            }
        }
    </script>`;

//Control SELECT
contenedor.innerHTML = `
    <form>
        <p>Pizzas:</p>
        <p><select id="pizza" onChange="mostrarSeleccionPizza()">
                <option value="180">Jamon y Queso</option>
                <option value="150">Muzzarella</option>
                <option value="170">Morrones</option>
            </select></p>
        <p><input type="text" id="mensaje"></p>
    </form>

    <script>
        function mostrarSeleccionPizza() {
            document.getElementById('mensaje').value =
                document.getElementById('pizza').options[document.getElementById('pizza').selectedIndex].value;
        }
    </script>
`;

//Control CHECKBOX
contenedor.innerHTML = `
    <form>
        Seleccione los deportes que practica:<br>
        <input type="checkbox" id="checkbox1">Fútbol<br>
        <input type="checkbox" id="checkbox2">Básquet<br>
        <input type="checkbox" id="checkbox3">Tenis<br>
        <input type="button" onClick="verificar()">
    </form>

    <script>
        function verificar() {
            let deportes = '';
            if (document.getElementById("checkbox1").checked) {
                deportes = deportes + 'Fútbol ';
            }
            if (document.getElementById("checkbox2").checked) {
                deportes = deportes + 'Básquet ';
            }
            if (document.getElementById("checkbox3").checked) {
                deportes = deportes + 'Tenis';
            }
            alert('Los deportes seleccionados son:' + deportes);
        }
    </script>
`;

//Control RADIO
contenedor.innerHTML = `
    <form>
    <p>¿Es mayor de edad?</p>
    <p><input type="radio" id="radio1" name="edad">si</p>
    <p><input type="radio" id="radio2" name="edad">no</p>
    <p><input type="button" onClick="verificarEdad()"></p>
    </form>

    <script>
    function verificarEdad() {
        if (document.getElementById('radio1').checked) {
            alert('Eres mayor de edad, podes entrar');
        }
        if (document.getElementById('radio2').checked) {
            alert('No eres mayor de edad, no vas a entrar');
        }
    }
    </script>
`;

//Control TEXTAREA
contenedor.innerHTML = `
    <form>
        Ingrese nombre:
        <input type="text" id="nombre"><br> Ingrese mail:
        <input type="text" id="mail"><br> Comentarios:
        <br>
        <textarea id="comentarios" rows="20" cols="100"></textarea><br>
        <input type="button" value="confirmar" onClick="verificar()">
    </form>

    <script>
        function verificar() {
            let nombre = document.getElementById('nombre').value;
            let mail = document.getElementById('mail').value;
            let comentarios = document.getElementById('comentarios').value;
            alert(nombre + '\n' + mail + '\n' + comentarios);
        }
    </script>
`;