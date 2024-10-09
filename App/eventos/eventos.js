//Eventos onFocus y onBlur
const consola = document.getElementById("consola");

export function eventoOnFocus_OnBlur() {
    function vaciar(control) {
        control.value = '';
    }

    function verificar(control) {
        if (control.value.length < 7 || control.value.length > 20) {
            alert('cantidad de caracteres no valido en la contraseña(deben ser entre 7-20 caracteres)');
        }
    }

    // Asignar el contenido HTML a la consola
    consola.innerHTML = `
        Copiar el codigo y ejecutarlo en el archivo index.html
    `;

    // Retornar el código HTML como texto
    return `
        Ingrese nombre de usuario:
        &lt;input type="text" id="usuario" onFocus="vaciar(this)"&gt;&lt;br&gt; 

        Ingrese contraseña:
        &lt;input type="password" id="clave" onBlur="verificar(this)"&gt;&lt;br&gt;

        &lt;input type="button" value="confirmar"&gt;

        &lt;script&gt;
            function vaciar(control) {
             control.value = '';
            }

            function verificar(control) {
                if (control.value.length < 7 || control.value.length > 20) {
                    alert('cantidad de caracteres no valido en la contraseña(deben ser entre 7-20 caracteres)');
                }
            }
        &lt;/script&gt;
    `;
};


//Evento onMouseOver y onMouseOut
export function eventoOnMouseOver_OnMouseOut(){
    
    function pintar(objeto, col) {
        objeto.style.backgroundColor = col;
    }

    consola.innerHTML = `
    Copiar el codigo y ejecutarlo en el archivo index.html
    `;

    return `
    &lt;table border="2"&gt;
        &lt;tr&gt;
            &lt;td onMouseOver="pintar(this,'#ff0000')" onMouseOut="pintar(this,'#ffffff')"&gt;
                &lt;a href="http://www.outlook.com"&gt;Outlook&lt;/a&gt;
            &lt;/td&gt;
            &lt;td onMouseOver="pintar(this,'#00ff00')" onMouseOut="pintar(this,'#ffffff')"&gt;
                &lt;a href="http://www.yahoo.com"&gt;Yahoo&lt;/a&gt;
            &lt;/td&gt;
            &lt;td onMouseOver="pintar(this,'#0000ff')" onMouseOut="pintar(this,'#ffffff')"&gt;
                &lt;a href="http://www.gmail.com"&gt;Gmail&lt;/a&gt;
            &lt;/td&gt;
        &lt/tr&gt;
    &lt;/table&gt;

    &lt;script&gt;
        function pintar(objeto, col) {
            objeto.style.backgroundColor = col;
        }
    &lt;/script&gt;
    `;
}

/*
    <table border="2">
        <tr>
            <td onMouseOver="pintar(this,'#ff0000')" onMouseOut="pintar(this,'#ffffff')">
                <a href="http://www.outlook.com">Outlook</a>
            </td>
            <td onMouseOver="pintar(this,'#00ff00')" onMouseOut="pintar(this,'#ffffff')">
                <a href="http://www.yahoo.com">Yahoo</a>
            </td>
            <td onMouseOver="pintar(this,'#0000ff')" onMouseOut="pintar(this,'#ffffff')">
                <a href="http://www.gmail.com">Gmail</a>
            </td>
        </tr>
    </table>

    <script>
        function pintar(objeto, col) {
            objeto.style.backgroundColor = col;
        }
    </script>
*/

export function eventoOnLoad(){
    function agregarOnLoad() {
        // Obtiene el elemento body
        const body = document.body;

        // Agrega el atributo onLoad
        body.setAttribute('onLoad', 'alert("Cargado!");');

        // Espera 10 segundos y quita el atributo
        setTimeout(() => {
            body.removeAttribute('onLoad');
        }, 10000);
    }

    // Llama a la función al cargar la página
    window.onload = agregarOnLoad;

    consola.innerHTML = `
    Copiar el codigo y ejecutarlo en el archivo index.html
    `;
    
    return `
    &lt;body onLoad="saludar()"&gt;
        &lt;h1&gt;Hola Mundo!!&lt;/h1&gt
    
    &lt;/body&gt

    &lt;script&gt;
        function saludar() {
            alert('Ya cargó, Hola!!'); 
        }
    &lt;/script&gt;
    `;
}


/*
//Evento onLoad - eventi asociado a la etiqueta body
contenedor.innerHTML = `
    <body onLoad="saludar()">
        <h1>Hola Mundo!!<h1>
    <body>

    <script>
        function saludar() {
            alert('Ya cargo, Hola!!');
        }
    </script>   
`;
*/