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

// let buttonSubmit = document.getElementById("enviar");

// buttonSubmit.addEventListener("envio", function (event) {
//   if (!validarFormulario()) {
//     event.preventDefault();
//   }
// });

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validarFormulario()) {
    formulario.submit();
  } else {
    alert('error de envio');
  }
});

// rifInput.addEventListener("input", validarFormularioEnTiempoReal);
// NombreInput.addEventListener("input", validarFormularioEnTiempoReal);
// TelefonoInput.addEventListener("input", validarFormularioEnTiempoReal);
// direccionInput.addEventListener("input", validarFormularioEnTiempoReal);
// phoneInput.addEventListener("input", validarFormularioEnTiempoReal);

// function validarFormularioEnTiempoReal() {
//   validarFormulario();
// }

function validarFormulario() {
  let rif = rifInput.value.trim();
  let Nombre = NombreInput.value.trim();
  let Telefono = TelefonoInput.value.trim();
  let direccion = direccionInput.value.trim();
  let success = true;

  // let errorDiv = document.getElementById("error");
  //errorDiv.textContent = ""; // Limpiar mensaje de error

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
  // let errorDiv = document.getElementById("error");
  // errorDiv.textContent = mensaje;
  // errorDiv.style.fontSize = "30px";
  // errorDiv.style.textAlign = "center";
  // errorDiv.style.color = "red";
  // errorDiv.scrollIntoView({ behavior: "smooth", block: "start" });
}


// document.addEventListener('DOMContentLoaded', function() {
// //VALIDACION DE DATOS	
// $("#rif").on("keypress",function(e){
//     validarkeypress(/^[0-9-\b]*$/,e);
// });

// $("#rif").on("keyup",function(){
//     validarkeyup(/^[0-9]{6,9}$/,$(this),
// $("#srif"),"El formato debe ser 092348760 o 00003454");
//     if($("#rif").val().length > 6){
//     }
// });

// $("#Nombre").on("keypress",function(e){
//     validarkeypress(/^[A-Za-z0-9\b\s\u00f1\u00d1\u00E0-\u00FC]*$/,e);
// });
// $("#Nombre").on("keyup",function(){
//     validarkeyup(/^[A-Za-z0-9\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/,
//     $(this),$("#sNombre"),"Solo letras y/o números entre 3 y 30 caracteres");
// });
// $("#Telefono").on("keypress",function(e){
//     validarkeypress(/^[0-9-\b-]*$/,e);
// });

// $("#Telefono").on("keyup",function(){
//     validarkeyup(/^[0-9]{11,15}$/,$(this),$("#sTelefono"),"El formato debe ser 041215478964");
// });
// $("#direccion").on("keypress",function(e){
//     validarkeypress(/^[A-Za-z0-9\b\s\u00f1\u00d1\u00E0-\u00FC]*$/,e);
// });
// $("#direccion").on("keyup",function(){
//     validarkeyup(/^[A-Za-z0-9\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/,
//     $(this),$("#sdireccion"),"Solo letras o números entre 3 y 30 caracteres");
// });

// // //Validación de todos los campos antes del envio
// // function validarenvio(){
// //     if(validarkeyup(/^[0-9]{6,9}$/,$("#rif"),
// //         $("#srif"),"El formato debe ser J092348760 o G00003454")==0){
// //         muestraMensaje("El rif debe coincidir con el formato <br/>"+ 
// //                         "J092348760");	
// //         return false;					
// //     }
// //     else if(validarkeyup(/^[A-Za-z0-9\b\s\u00f1\u00d1\u00E0-\u00FC]{6,30}$/,
// //         $("#Nombre"),$("#sNombre"),"Solo Alfanumericos entre 3 y 30 caracteres")==0){
// //         muestraMensaje("Nombre <br/>Solo Alfanumerosletras  entre 3 y 30 caracteres");
// //         return false;
// //     }
// //     else if(validarkeyup(/^[0-9]{11,15}$/,$("#Telefono"),
// //     $("#sTelefono"),"El formato debe ser 041215478964")==0){
// //     muestraMensaje("Verifique el telefono");
// //     return false;
// //     }
// //     else if(validarkeyup(/^[A-Za-z0-9\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/,
// //     $("#direccion"),$("#sdireccion"),"Solo letras  entre 3 y 30 caracteres")==0){
// //     muestraMensaje("Direccion debe tener <br/>Solo letras  entre 3 y 30 caracteres");
// //     return false;
// //     }
    
// //     return true;
// // }


// //FIN DE VALIDACION DE DATOS
// //Función para validar por Keypress
// function validarkeypress(er,e){
        
//     key = e.keyCode;
    
    
//     tecla = String.fromCharCode(key);
    
    
//     a = er.test(tecla);
    
//     if(!a){
    
//         e.preventDefault();
//     }
    
    
// }
// //Función para validar por keyup
// function validarkeyup(er,etiqueta,etiquetamensaje,
// mensaje){
//     a = er.test(etiqueta.val());
//     if(a){
//         etiquetamensaje.text("");
//         return 1;
//     }
//     else{
//         etiquetamensaje.text(mensaje);
//         return 0;
//     }
// }
// });