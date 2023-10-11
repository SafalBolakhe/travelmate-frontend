document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-btn');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
