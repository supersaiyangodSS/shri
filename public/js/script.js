const loader = document.getElementById('loader')

window.addEventListener('load', () => {
  loader.style.display = 'none';
})

const copyrightYear = document.querySelector('#copyright-year');
const d = new Date();
copyrightYear.innerText = d.getFullYear();


const hamburgerMenu = document.querySelector('#hamburger-menu');
const hamburgerBtn = document.querySelector('#hamburger-btn');
const hamburgerBtnClose = document.querySelector('#hamburger-btn-close');


hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.style.transform = 'translateY(0)';
})

hamburgerBtnClose.addEventListener('click', () => {
    hamburgerMenu.style.transform = 'translateY(-500px)';
})

