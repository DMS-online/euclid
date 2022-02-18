const tabStepBtns = document.querySelectorAll('.list-how__step');
const tabContents = document.querySelectorAll('.section-how__content');

tabStepBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    const currentBtn = el;
    const dataStep = e.currentTarget.dataset.tabStep;
    const currentTab = document.querySelector(`[data-tab-content="${dataStep}"]`);

    tabStepBtns.forEach((item) => {
      item.classList.remove('tab-active');
      item.setAttribute('aria-expanded', 'false');
    });

    currentBtn.classList.add('tab-active');
    currentBtn.setAttribute('aria-expanded', 'true');

    tabContents.forEach((item) => {
      item.classList.remove('tab-active');
    });

    currentTab.classList.add('tab-active');
  });
});
