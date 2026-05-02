const slides = document.querySelector('.slides');
const buttons = document.querySelectorAll('[data-mode]');
function setMode(mode){
  slides.classList.toggle('horizontal', mode === 'horizontal');
  slides.classList.toggle('vertical', mode !== 'horizontal');
  buttons.forEach(b=>b.classList.toggle('active', b.dataset.mode===mode));
  localStorage.setItem('swipeMode', mode);
}
buttons.forEach(btn=>btn.addEventListener('click',()=>setMode(btn.dataset.mode)));
setMode(localStorage.getItem('swipeMode') || 'vertical');
