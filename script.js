const statusEl = document.querySelector('#status');
const helloBtn = document.querySelector('#helloBtn');
const themeBtn = document.querySelector('#themeBtn');

helloBtn.addEventListener('click', () => {
  statusEl.textContent = '🎉 Hello from GitHub Pages! CI/CD Deployment is working perfectly!';
});

themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeBtn.textContent = isDark ? 'Toggle Theme ☀️' : 'Toggle Theme 🌙';
  statusEl.textContent = isDark ? '🌙 Dark theme activated' : '☀️ Light theme activated';
});
