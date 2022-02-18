const searchOpenBtn = document.querySelector('.open-search');
const searchCloseBtn = document.querySelector('.close-search');
const searchBox = document.querySelector('.search-form');

searchOpenBtn.addEventListener('click', () => {
  searchBox.classList.add('search-active');
});

searchCloseBtn.addEventListener('click', () => {
  searchBox.classList.remove('search-active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchBox.classList.remove('search-active');
  }
});
