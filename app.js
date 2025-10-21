// Menü
const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));

// Yıl
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){ e.preventDefault(); window.scrollTo({top: el.offsetTop-70, behavior:'smooth'}); nav.classList.remove('open'); }
  });
});
