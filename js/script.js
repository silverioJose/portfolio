const menuToggle = document.getElementById('menu-toggle');
const navButton = document.getElementById('nav');
const header = document.getElementById('header');

menuToggle.addEventListener('click', () => {
    navButton.classList.toggle('ativo');
    header.classList.toggle('ativo');
});

const links = document.querySelectorAll('.nav__button');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('ativo');
        header.classList.remove('ativo');
    });
});