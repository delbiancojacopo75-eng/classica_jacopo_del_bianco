// Menu hamburger: apre/chiude le voci su mobile
const bottone = document.querySelector('.menu');
const menu = document.querySelector('.nav');

function chiudiMenu() {
  menu.classList.remove('is-open');
  bottone.setAttribute('aria-expanded', 'false');
  bottone.setAttribute('aria-label', 'Apri menu');
}

bottone.addEventListener('click', () => {
  const aperto = menu.classList.toggle('is-open');
  bottone.setAttribute('aria-expanded', aperto);
  bottone.setAttribute('aria-label', aperto ? 'Chiudi menu' : 'Apri menu');
});

// Chiude il menu quando si sceglie una voce
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', chiudiMenu));

// Chiude il menu se lo schermo torna grande
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) chiudiMenu();
});
