window.location.reload()

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar los elementos por su ID
    const categoriasLink = document.getElementById("categorias");
    const proveedoresLink = document.getElementById("proveedores");

    // Agregar evento de clic para "MODELO DE PRODUCTOS"
    modeloLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        window.location.href = "modelo.html"; // Redirigir a modelo.html
    });

    // Agregar evento de clic para "CATEGORIAS DE PRODUCTOS"
    categoriasLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        window.location.href = "categorias.html"; // Redirigir a categorias.html
    });
});