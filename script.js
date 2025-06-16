console.log("Script carregado!");

document.addEventListener("DOMContentLoaded", () => {
  const nome = "Gustavo Rosa";
  let i = 0;
  const el = document.getElementById("typing-name");

  function typeEffect() {
    if (i < nome.length) {
      el.textContent += nome.charAt(i);
      i++;
      setTimeout(typeEffect, 150);
    } else {
      el.style.borderRight = "none";
      el.style.animation = "none";
    }
  }

  typeEffect();
});

// Mostrar cards ao rolar
const cards = document.querySelectorAll('.card');
function revealCards() {
    const triggerBottom = window.innerHeight * 0.55;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards); // ADICIONE esta linha
revealCards(); // Chama a função ao carregar a página
// Efeito de scroll suave
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
}
