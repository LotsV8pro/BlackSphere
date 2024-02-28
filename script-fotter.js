window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Cambia este valor según sea necesario
        footer.classList.add('show-footer');
    } else {
        footer.classList.remove('show-footer');
    }
});
