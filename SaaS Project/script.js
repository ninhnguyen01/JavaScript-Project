// mobile menu
document.addEventListener('DOMContentLoaded', ()=> {
    const hamburgerBtn = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerBtn.addEventListener("click", ()=> mobileMenu.classList.toggle("active"));
});

