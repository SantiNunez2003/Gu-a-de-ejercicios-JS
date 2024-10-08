import { estSwitch } from "./estructura-switch/est-switch.js";
import { estCondicionalAnidadas, estOperadorConsicional } from "./estructuras-condicionales/est-cond-anidadas.js";
import { estCondicionalCompuesta } from "./estructuras-condicionales/est-cond-compuestas.js";
import { estCondicionalSimple } from "./estructuras-condicionales/est-cond-simples.js";
import { estRepetitivaWhile } from "./estructuras-repetitivas/est-repetitiva.js";
import { entradaDatos } from "./introduccion/entrada-datos.js";
import { estructurasSec1, estructurasSec2, estructurasSec3, estructurasSec4 } from "./introduccion/est-secuenciales.js";
import { variables } from "./introduccion/variables.js"

const contenedorCodigo = document.getElementById("codigo");

contenedorCodigo.innerHTML = estRepetitivaWhile();