import { valida } from "./contactar/contacto.js"
import { iniciarBuscador } from "./buscador/buscar.js";
import validacionSesion from "./validar-sesion/validacionSesion.js";


document.addEventListener('DOMContentLoaded', function () {
    iniciarBuscador();
});

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

