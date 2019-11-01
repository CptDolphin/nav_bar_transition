const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    console.log('toggled');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});
