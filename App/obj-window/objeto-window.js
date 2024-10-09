//Objeto Window
const consola = document.getElementById("consola");

export function objetoWindow(){
    
    function abrirVentana() {
        window.open('', '', 'width=600,height=300');
    }

    consola.innerHTML = `
    <input id="boton" type="button" value="abrir ventana" onClick="abrirVentana()">
    `

    const boton = document.getElementById("boton");

    boton.addEventListener("click", () => {
        abrirVentana()
    });


    return `
    &lt;input id="boton" type="button" value="Abrir Ventana" onclick="abrir()"&gt;

    &lt;script&gt;
        function abrirVentana() {
            window.open('', '', 'width=600,height=300');
        }
    &lt;/script&gt;
    `;
};

/*
    `
    <form>
        <input id="boton" type="button" value="abrir ventana" onClick="abrirVentana()">
    </form>

    <script>
        function abrirVentana() {
            let ventana = open('', '', 'width=600,height=300');
        }
    </script>
    `;
*/

//OBJETO WINDOW PROPIEDAD LOCATION
export function objetoWindowLocation(){
   
    const outlook = 'https://www.outlook.com';
    const gmail = 'https://www.gmail.com';
    const yahoo = 'https://www.yahoo.com';

    consola.innerHTML = `<button id="boton">PAGINA ALEATORIA</button> `

    const boton = document.getElementById("boton");

    boton.addEventListener("click", () => {
        let n;
        n = Math.random() * 3;
        n = parseInt(n);

        console.log(n);
        
        switch (n) {
            case 0:
                window.location = outlook;
                return;
            case 1:
                window.location = gmail;
                return;
            case 2:
                window.location = yahoo;
                return;
            default: 
                return;
        }
    });

    return `

    &lt;button id="boton">PAGINA ALEATORIA&lt;/button&gt 

    &lt;script&gt;
        const outlook = 'https://www.outlook.com';
        const gmail = 'https://www.gmail.com';
        const yahoo = 'https://www.yahoo.com';

        const boton = document.getElementById("boton");

        boton.addEventListener("click", () => {
            let n;
            n = Math.random() * 3;
            n = parseInt(n);

            console.log(n);
            
            switch (n) {
                case 0:
                    window.location = outlook;
                    return;
                case 1:
                    window.location = gmail;
                    return;
                case 2:
                    window.location = yahoo;
                    return;
                default: 
                    return;
            }
        });
    &lt;/script&gt
    `;
}

/*
//Propiedad location del objeto window
contenedor.innerHTML = `
   
    <button id="boton">PAGINA ALEATORIA</button>

    <script>
        const outlook = 'https://www.outlook.com';
        const gmail = 'https://www.gmail.com';
        const yahoo = 'https://www.yahoo.com';

        const boton = document.getElementById("boton");

        boton.addEventListener("click", () => {
          let n;
          n = Math.random()*3;
          n = parseInt(n);

          console.log(n)
          
          switch(n){
            case 0:
              window.location = outlook;
              return;
            case 1: 
              window.location = gmail;
              return;
            case 2: 
              window.location = yahoo;
              return;
            default: return;
          }
        };
      </script>
`;
*/

//Propiedad screen del objeto window
export function objetoWindowScreen(){
    
    function abrirVentana() {
        var ventana = window.open('', '', 'width=' + screen.availWidth + ',height=' + (screen.availHeight / 2));
    }

    consola.innerHTML = `<button id="boton">Mitad Pagina</button> `

    boton.addEventListener("click", () => {
        abrirVentana();
    });

    return `
    &lt;button id="boton">Mitad Pagina&lt;/button&gt 

    &lt;script&gt;
        function abrirVentana() {
            var ventana = open('', '', 'width=' + screen.availWidth + ',height=' + (screen.availHeight / 2));
        }
    &lt;/script&gt;
    `;
};

/*
contenedor.innerHTML = `
    <form>
        <input type="button" value="abrir ventana" onClick="abrirVentana()">
    </form>

    <script>
        function abrirVentana() {
            var ventana = open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight / 2);
        }
    </script>
`;
*/

//Propiedad navigator del objeto window - 
export function objetoWindowNavigator(){
   
    function verificar() {
        if (navigator.cookieEnabled) {
            // Código original comentado
            // alert('Acceso a cookies activadas');
            consola.innerHTML = 'Acceso a cookies activadas';
        } else {
            // Código original comentado
            // alert('No se encuentran activadas las cookies en este navegador');
            consola.innerHTML = 'No se encuentran activadas las cookies en este navegador';
        }
    }
    
    function agregarOnLoad() {
        // Obtiene el elemento body
        const body = document.body;

        // Agrega el atributo onLoad
        body.setAttribute('onLoad', 'verificar()');

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
    &lt;body onLoad="verificar()"&gt;
    
        &lt;h1&gt;Holaa&lt;h1&gt;

        &lt;script&gt;
            function verificar() {
                if (navigator.cookieEnabled == true) {
                    alert('Acceso a cookies activadas'); 
                } else {
                    alert('No se encuentran activadas las cookies en este navegador');
                }
            }
        &lt;/script&gt;
    &lt;/body&gt;
    `

}
/*
contenedor.innerHTML = `
    <body onLoad="verificar()">

        <h1>Bienvenidos</h1>

        <script>
            function verificar() {
                if (navigator.cookieEnabled == true) {
                    alert('Acceso a cookies activadas');
                } else {
                    alert('No se encuentran activadas las cookies en este navegador');
                }
            }
        </script>

    </body>
`;*/