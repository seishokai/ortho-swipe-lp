const swipe = document.getElementById('swipe');
const toggle = document.getElementById('modeToggle');
let vertical = false;
toggle.addEventListener('click', () => {
  vertical = !vertical;
  swipe.classList.toggle('vertical', vertical);
  swipe.classList.toggle('horizontal', !vertical);
  toggle.textContent = vertical ? '横スライドに切替' : '縦スライドに切替';
  swipe.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
});
