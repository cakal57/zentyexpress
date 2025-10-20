const nav = document.querySelector('.nav');
const btn = document.getElementById('navToggle');
if (btn) btn.addEventListener('click', ()=> nav.classList.toggle('open'));
