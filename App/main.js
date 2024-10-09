import { controlPassword, FormButtonText, funcionesEventos } from "./controles/controles.js";
import { estSwitch } from "./estructura-switch/est-switch.js";
import { estCondicionalAnidadas, estOperadorConsicional } from "./estructuras-condicionales/est-cond-anidadas.js";
import { estCondicionalCompuesta } from "./estructuras-condicionales/est-cond-compuestas.js";
import { estCondicionalSimple } from "./estructuras-condicionales/est-cond-simples.js";
import { conceptoAcumulador, estRepetitivaDowhile, estRepetitivaFor, estRepetitivaWhile } from "./estructuras-repetitivas/est-repetitiva.js";
import { eventoOnFocus_OnBlur, eventoOnLoad, eventoOnMouseOver_OnMouseOut } from "./eventos/eventos.js";
import { funcion, funcionConParametros, funcionConRetorno, funcionesAnidadas, funcionesObjetoArgument, funcionesTime } from "./funciones/funciones.js";
import { entradaDatos } from "./introduccion/entrada-datos.js";
import { estructurasSec1, estructurasSec2, estructurasSec3, estructurasSec4 } from "./introduccion/est-secuenciales.js";
import { variables } from "./introduccion/variables.js"
import { objetoWindow, objetoWindowLocation, objetoWindowNavigator, objetoWindowScreen } from "./obj-window/objeto-window.js";
import { expresionesRegulares, operadorLogicoO, operadorLogicoY } from "./operadores-logicos/opeadores.js";
import { objetosLiterales, POO, POOvariasClases, vectoresTipoObjeto } from "./POO/POO.js";

const contenedorCodigo = document.getElementById("codigo");

contenedorCodigo.innerHTML = controlPassword();