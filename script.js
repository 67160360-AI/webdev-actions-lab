const status = document.querySelector('#status');

document.querySelector('#helloBtn').addEventListener('click', () => {
  status.textContent = 'Hello from GitHub Pages!';
});

document.querySelector('#themeBtn').addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  status.textContent = dark ? 'Dark theme on' : 'Light theme on';
});
