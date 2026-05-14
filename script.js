const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';
  card.style.transition = '0.8s';
});

const title = document.querySelector('.hero h1');

setInterval(() => {
  title.style.textShadow = `
    0 0 20px #ffd700,
    0 0 40px #ffcc00,
    0 0 80px rgba(255,215,0,0.9)
  `;

  setTimeout(() => {
    title.style.textShadow = `
      0 0 10px #ffd700,
      0 0 20px #ffcc00
    `;
  }, 1500);

}, 3000);