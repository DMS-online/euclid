class TempScrollBox {
  constructor() {
    this.scrollBarWidth = 0;

    this.measureScrollbarWidth();
  }

  measureScrollbarWidth() {
    const scrollBox = document.createElement('div');

    scrollBox.style.overflow = 'scroll';

    document.body.appendChild(scrollBox);

    this.scrollBarWidth = scrollBox.offsetWidth - scrollBox.clientWidth;

    document.body.removeChild(scrollBox);
  }

  get width() {
    return this.scrollBarWidth;
  }
}

const scrollEl = new TempScrollBox();

document.documentElement.style.setProperty('--scroll-indent', `${scrollEl.width}px`);
