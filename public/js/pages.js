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

const backBtn = document.querySelector('#backBtn');

backBtn.addEventListener('click', () => {
    history.back();
})

const incBtn = document.querySelector('#inc');
const drcBtn = document.querySelector('#drc');
const contentData = document.querySelector('#content-data');

let fontSize = localStorage.getItem('fontSizeMain') || '16px';
contentData.style.fontSize = fontSize;

function updateFontSize(size) {
    let currentSize = parseInt(fontSize) + size;
    currentSize = Math.max(12, Math.min(48, currentSize));
    fontSize = currentSize + 'px';
    contentData.style.fontSize = fontSize;
    localStorage.setItem('fontSizeMain', fontSize);
  }

  incBtn.addEventListener('click', () => {
    updateFontSize(2)
  })
  
  drcBtn.addEventListener('click', () => {
    updateFontSize(-2);
  })