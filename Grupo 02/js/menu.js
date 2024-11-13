/* INTEGRANTES
Moises Contreras C.I: 30.405.571
Adrian Duin C.I.: 29.896.041
David Peña C.I. 30.304.373
Frangher Pereira C.I. 30.553.759
*/
// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener los elementos de las principal, categorías y proveedores
    const categoriasLink = document.getElementById("categorias");
    const proveedoresLink = document.getElementById("proveedores");
    const principalLink = document.getElementById("principal");

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
    // Agregar evento de clic para redirigir a proveedores.html
    principalLink.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del enlace
        window.location.href = "index.html"; // Redirigir a proveedores.html
    });
});

// Agregue la funcionalidad de despliegue al boton del menu
document.addEventListener('DOMContentLoaded', function() {
    const btnMenu = document.getElementById('btn-menu');
    const navMenu = document.querySelector('.nav-menu');

    btnMenu.addEventListener('change', function() {
        if (btnMenu.checked) {
            navMenu.style.display = 'block'; // Muestra el menú
        } else {
            navMenu.style.display = 'none'; // Oculta el menú
        }
    });
});
