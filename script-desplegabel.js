document.addEventListener("DOMContentLoaded", function () {
    // Manejar clic en el overlay
    document.getElementById("overlay").addEventListener("click", closeMenu);
});

// Función para abrir o cerrar el menú desplegable
function toggleMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");

    // Verificar si la clase 'menu-opened' está presente en el cuerpo
    var isMenuOpened = document.body.classList.contains("menu-opened");

    if (!isMenuOpened) {
        menu.style.left = "0";
        overlay.style.display = "block"; // Mostrar overlay
        document.body.style.overflow = "hidden"; // Deshabilitar el desplazamiento del cuerpo
        document.body.classList.add("menu-opened");
    } else {
        menu.style.left = "-300px";
        overlay.style.display = "none"; // Ocultar overlay
        document.body.style.overflow = "auto"; // Habilitar el desplazamiento del cuerpo
        document.body.classList.remove("menu-opened");
    }
}

// Función para cerrar el menú desplegable
function closeMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");

    menu.style.left = "-300px";
    overlay.style.display = "none"; // Ocultar overlay
    document.body.style.overflow = "auto"; // Habilitar el desplazamiento del cuerpo
    document.body.classList.remove("menu-opened");
}
