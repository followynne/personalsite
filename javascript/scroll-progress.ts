const updateScrollBarPosition = () => {
  const progressBar = document.querySelector(
    '.articles-progress-bar .progress-bar',
  ) as HTMLElement;
  const verticalPos = window.scrollY;
  const pageHeight = document.body.scrollHeight;
  const posHeight = window.innerHeight;
  const scrollPercent = (
    (verticalPos / (pageHeight - posHeight)) *
    100
  ).toFixed(0);

  progressBar.style.setProperty('width', `${scrollPercent}%`);
  progressBar.ariaValueNow = `${scrollPercent}%`;
};

updateScrollBarPosition();
window.addEventListener('scroll', updateScrollBarPosition);
