const burgerBtn = document.querySelector('.burger-header');
const burgerMenu = document.querySelector('.nav-header');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger-active');
  burgerMenu.classList.toggle('burger-active');

  if (burgerBtn.classList.contains('burger-active')) {
    burgerBtn.setAttribute('aria-expanded', 'true');
    burgerBtn.setAttribute('aria-label', 'Закрыть основное меню.');
  } else {
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.setAttribute('aria-label', 'Открыть основное меню.');
  }
});
