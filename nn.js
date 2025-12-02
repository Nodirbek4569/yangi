const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');


navToggle.addEventListener('click', () => {
navMenu.classList.toggle('open');
});


// Smooth scroll
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
const target = document.querySelector(e.target.getAttribute('href'));
target.scrollIntoView({ behavior: 'smooth' });
});
});