/* INTEGRANTES
Moises Contreras C.I: 30.405.571
Adrian Duin C.I.: 29.896.041
David Peña C.I. 30.304.373
Frangher Pereira C.I. 30.553.759
*/
// Validaciones (Realizado por Frangher Pereira)
let formulario = document.getElementById("f");
let rifInput = document.getElementById("rif");
let NombreInput = document.getElementById("Nombre");
let TelefonoInput = document.getElementById("Telefono");
let direccionInput = document.getElementById("direccion");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validarFormulario()) {
    formulario.submit();
  } else {
    alert('error de envio');
  }
});

function validarFormulario() {
  let rif = rifInput.value.trim();
  let Nombre = NombreInput.value.trim();
  let Telefono = TelefonoInput.value.trim();
  let direccion = direccionInput.value.trim();
  let success = true;

  if (rif === "") {
    mostrarError("Por favor ingresa el rif del proveedor");
    success = false;
  } else if (!/^[0-9]{6,9}$/.test(rif)) {
    mostrarError("El formato debe ser 092348760 o 00003454");
    success = false;
  }

  if (Nombre === "") {
    mostrarError("Por favor ingresa un nombre válido");
    success = false;
  } else if (!/^[A-Za-z0-9\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/.test(Nombre)) {
    mostrarError("Solo letras y/o numeros entre 3 y 30 caracteres");
    success = false;
  }

  if (Telefono === "") {
    mostrarError("Por favor ingresa un Telefono válido");
    success = false;
  } else if (!/^[0-9]{11,15}$/.test(Telefono)) {
    mostrarError("El formato debe ser 041215478964");
    success = false;
  }

  if (direccion === "") {
    mostrarError("Por favor ingresa una dirección válida");
    success = false;
  } else if (!/^[A-Za-z0-9\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/.test(direccion)) {
    mostrarError("Solo letras y números entre 3 y 30 caracteres");
    success = false;
  }
  return success;
}

function mostrarError(mensaje) {
  alert(mensaje);
 
}

