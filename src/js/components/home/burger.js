const siteBody = document.querySelector('.body');
const burgerBtn = document.querySelector('.burger-header');
const navMenu = document.querySelector('.nav-header');
const linksNavMenu = document.querySelectorAll('.nav-header__link');

function hiddenScroll() {
  const pagePosition = window.scrollY;

  siteBody.classList.add('scroll-hidden');
  siteBody.dataset.position = pagePosition;
  siteBody.style.top = `${-pagePosition}px`;
}

function visibleScroll() {
  const pagePosition = parseInt(siteBody.dataset.position, 10);

  siteBody.style.top = 'auto';
  siteBody.classList.remove('scroll-hidden');

  window.scroll({
    top: pagePosition,
    left: 0,
  });

  siteBody.removeAttribute('data-position');
}

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger-active');
  navMenu.classList.toggle('burger-active');

  if (burgerBtn.classList.contains('burger-active')) {
    burgerBtn.setAttribute('aria-expanded', 'true');
    burgerBtn.setAttribute('aria-label', 'Закрыть основное меню.');

    hiddenScroll();
  } else {
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.setAttribute('aria-label', 'Открыть основное меню.');

    visibleScroll();
  }
});

linksNavMenu.forEach((el) => {
  el.addEventListener('click', () => {
    burgerBtn.classList.remove('burger-active');
    navMenu.classList.remove('burger-active');

    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.setAttribute('aria-label', 'Открыть основное меню.');

    visibleScroll();
  });
});
