const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

const music = document.getElementById('bg-music');
const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', () => {
  music.volume = 0.4;
  music.play();
});