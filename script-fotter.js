window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition >= document.body.scrollHeight) {
        footer.classList.add('show-footer');
    } else {
        footer.classList.remove('show-footer');
    }
});
