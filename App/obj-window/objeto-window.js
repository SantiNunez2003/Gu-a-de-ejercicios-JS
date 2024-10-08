//Objeto Window
const contenedor = document.getElementById("codigo");

contenedor.innerHTML = `
    <form>
        <input type="button" value="abrir ventana" onClick="abrirVentana()">
    </form>

    <script>
        function abrirVentana() {
            let ventana = open('', '', 'width=600,height=300');
        }
    </script>
`;

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

//Propiedad screen del objeto window
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

//Propiedad navigator del objeto window - 
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
`;