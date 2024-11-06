window.location.reload()

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar los elementos por su ID
    const categoriasLink = document.getElementById("categorias");
    const proveedoresLink = document.getElementById("proveedores");

    // Agregar evento de clic para "CATEGORIAS DE PRODUCTOS"
    categoriasLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        window.location.href = "categorias.html"; // Redirigir a categorias.html
    });

    // Agregar evento de clic para "PROVEEDORES"
    proveedoresLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        window.location.href = "proveedores.html"; // Redirigir a modelo.html
    });
});