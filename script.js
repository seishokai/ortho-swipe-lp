
const root = document.getElementById('swipeRoot');
const verticalBtn = document.getElementById('verticalBtn');
const horizontalBtn = document.getElementById('horizontalBtn');

verticalBtn.addEventListener('click', () => {
  root.classList.remove('horizontal');
  root.classList.add('vertical');
  verticalBtn.classList.add('active');
  horizontalBtn.classList.remove('active');
});

horizontalBtn.addEventListener('click', () => {
  root.classList.remove('vertical');
  root.classList.add('horizontal');
  horizontalBtn.classList.add('active');
  verticalBtn.classList.remove('active');
});

document.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => console.log('CTA clicked:', a.href));
});
