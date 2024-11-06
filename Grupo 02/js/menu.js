// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener los elementos de las categorías y proveedores
    const categoriasLink = document.getElementById("categorias");
    const proveedoresLink = document.getElementById("proveedores");

    // Agregar evento de clic para redirigir a categorias.html
    categoriasLink.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del enlace
        window.location.href = "categorias.html"; // Redirigir a categorias.html
    });

    // Agregar evento de clic para redirigir a proveedores.html
    proveedoresLink.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del enlace
        window.location.href = "proveedores.html"; // Redirigir a proveedores.html
    });
});