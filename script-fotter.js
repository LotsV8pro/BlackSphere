document.addEventListener("DOMContentLoaded", function() {
    // Función para ajustar el footer en dispositivos móviles
    function adjustFooterMobile() {
        var footer = document.querySelector('footer');
        var content = document.querySelector('.content');
        var isScrollable = document.body.scrollHeight > window.innerHeight;

        if (isScrollable) {
            var scrollPosition = window.scrollY;

            // Calculamos la distancia mínima para mostrar el footer sin superponer el contenido
            var minScrollToShowFooter = document.body.scrollHeight - window.innerHeight;

            if (scrollPosition >= minScrollToShowFooter) {
                footer.classList.add('show-footer');
            } else {
                footer.classList.remove('show-footer');
            }
        } else {
            footer.classList.add('show-footer');
        }

        // Ajustar margen inferior del contenido solo si el footer no está fijo al final de la página
        if (!footer.classList.contains('fixed-footer')) {
            var footerHeight = footer.offsetHeight;
            content.style.marginBottom = footerHeight + 'px';
        }
    }

    // Función para ajustar el footer en dispositivos no móviles
    function adjustFooterDesktop() {
        var footer = document.querySelector('footer');
        var isScrollable = document.body.scrollHeight > window.innerHeight;

        if (isScrollable) {
            var scrollPosition = window.scrollY;

            if (scrollPosition > 100) {
                footer.classList.add('show-footer');
            } else {
                footer.classList.remove('show-footer');
            }
        } else {
            footer.classList.add('show-footer');
        }
    }

    // Agregar clase al body si es un dispositivo móvil
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.body.classList.add('mobile');
        adjustFooterMobile(); // Llamar a la función para ajustar el footer en dispositivos móviles
        window.addEventListener('scroll', adjustFooterMobile);
        window.addEventListener('resize', adjustFooterMobile);
    } else {
        adjustFooterDesktop(); // Llamar a la función para ajustar el footer en dispositivos no móviles
        window.addEventListener('scroll', adjustFooterDesktop);
        window.addEventListener('resize', adjustFooterDesktop);
    }
});
