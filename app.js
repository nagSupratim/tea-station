//setup date
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());
// setup nav
const navBtn = document.getElementById('nav-btn');
const navBtnIcon = document.getElementById('nav-btn-icon');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
// show nav
navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav');
});
navBtnIcon.addEventListener('click', () => {
  navbar.classList.add('showNav');
});
// close nav
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});

document.addEventListener('click', (event) => {
  if (event.target !== navBtn && event.target !== navBtnIcon)
    navbar.classList.remove('showNav');
});
