document.addEventListener("DOMContentLoaded", function() {
    function adjustFooter() {
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

    adjustFooter(); // Llamar a la función para ajustar el footer cuando se carga la página

    window.addEventListener('scroll', adjustFooter);
    window.addEventListener('resize', adjustFooter);
});
