const accordionBoxes = document.querySelectorAll('.accordion-faq__item');
// const accordionBtns = document.querySelectorAll('.accordion-faq__btn');

accordionBoxes.forEach((el) => {
  el.addEventListener('click', (e) => {
    const thisElement = e.currentTarget;
    const accordionBtn = thisElement.querySelector('.accordion-faq__btn');
    const accordionContent = thisElement.querySelector('.accordion-faq__content');

    thisElement.classList.toggle('accordion-active');

    if (thisElement.classList.contains('accordion-active')) {
      accordionBtn.setAttribute('aria-expanded', true);
      accordionContent.setAttribute('aria-hidden', false);
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
    } else {
      accordionBtn.setAttribute('aria-expanded', false);
      accordionContent.setAttribute('aria-hidden', true);
      accordionContent.style.maxHeight = null;
    }
  });
});

// accordionBtns.forEach((el) => {
//   el.addEventListener('focus', (e) => {
//     accordionBoxes.forEach((item) => {
//       item.classList.remove('focus');
//     });

//     e.currentTarget.closest('.accordion-faq__item').classList.add('focus');
//   });
// });
