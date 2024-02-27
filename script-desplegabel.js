// Función para abrir o cerrar el menú desplegable
function toggleMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");

    if (menu.style.left === "-200px") {
        menu.style.left = "0";
        overlay.style.display = "block"; // Mostrar overlay
    } else {
        menu.style.left = "-200px";
        overlay.style.display = "none"; // Ocultar overlay
    }
}

// Función para cerrar el menú desplegable al hacer clic en el overlay
function closeMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");

    menu.style.left = "-200px";
    overlay.style.display = "none"; // Ocultar overlay
}
