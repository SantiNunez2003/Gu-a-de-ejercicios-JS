//Eventos onFocus y onBlur
const consola = document.getElementById("consola");

export function eventoOnFocus_OnBlur(){
    
}

contenedor.innerHTML = `
   
        Ingrese nombre de usuario:
        <input type="text" id="usuario" onFocus="vaciar(this)"><br> 
        Ingrese contraseña:
        <input type="password" id="clave" onBlur="verificar(this)"><br>
        
        <input type="button" value="confirmar">
    

   
        function vaciar(control) {
                control.value = '';
        }

        function verificar(control) {
            if (control.value.length < 7 || control.value.length > 20) {
                alert('cantidad de caracteres no valido en la contraseña(deben ser entre 7-20 caracteres)');
            }
        }
  
`;

//Evento onMouseOver y onMouseOut
contenedor.innerHTML = `
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
`;

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