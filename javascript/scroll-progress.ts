const updateScrollBarPosition = () => {
  const progressBar = document.querySelector(
    '.articles-progress-bar .progress-bar',
  ) as HTMLElement;
  const verticalPos = window.scrollY;
  const pageHeight = document.body.scrollHeight;
  const posHeight = window.innerHeight;
  const scrollPercent = (verticalPos / (pageHeight - posHeight)) * 100;
  const scrollPercentFixed = scrollPercent.toFixed(0);

  progressBar.style.setProperty('width', `${scrollPercentFixed}%`);
  progressBar.ariaValueNow = `${scrollPercentFixed}%`;
  progressBar.textContent =
    scrollPercent < 95 ? `${scrollPercentFixed}%` : 'Thanks for reading!';
};

updateScrollBarPosition();
window.addEventListener('scroll', updateScrollBarPosition);
