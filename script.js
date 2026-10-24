const intro = document.getElementById('introScreen');
const openButton = document.getElementById('openInvite');
const audio = document.getElementById('weddingAudio');
const musicToggle = document.getElementById('musicToggle');
const musicLabel = document.getElementById('musicLabel');

document.body.classList.add('locked');
openButton.addEventListener('click', () => {
  intro.classList.add('closed');
  document.body.classList.remove('locked');
  // Browsers permit audio after a direct user gesture.
  audio.play().then(() => {
    musicLabel.textContent = 'Pause music';
    musicToggle.classList.add('playing');
  }).catch(() => {
    musicLabel.textContent = 'Play music';
  });
});

musicToggle.addEventListener('click', async () => {
  if (audio.paused) {
    try {
      await audio.play();
      musicLabel.textContent = 'Pause music';
      musicToggle.classList.add('playing');
    } catch (error) {
      musicLabel.textContent = 'Tap to play';
    }
  } else {
    audio.pause();
    musicLabel.textContent = 'Play music';
    musicToggle.classList.remove('playing');
  }
});

// Wedding muhurtham: 29 November 2026, 7:30 AM IST (UTC+05:30).
const weddingTime = new Date('2026-11-29T07:30:00+05:30').getTime();
function updateCountdown() {
  const remaining = weddingTime - Date.now();
  const note = document.getElementById('countdownNote');
  if (remaining <= 0) {
    ['days','hours','minutes','seconds'].forEach(id => document.getElementById(id).textContent = '00');
    note.textContent = 'Our wedding day has arrived. Thank you for celebrating with us!';
    return;
  }
  const day = Math.floor(remaining / 86400000);
  const hour = Math.floor((remaining % 86400000) / 3600000);
  const minute = Math.floor((remaining % 3600000) / 60000);
  const second = Math.floor((remaining % 60000) / 1000);
  document.getElementById('days').textContent = String(day).padStart(2,'0');
  document.getElementById('hours').textContent = String(hour).padStart(2,'0');
  document.getElementById('minutes').textContent = String(minute).padStart(2,'0');
  document.getElementById('seconds').textContent = String(second).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Reveal cards and sections as they enter the viewport.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}
