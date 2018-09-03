import { measureWidthScroll } from '../../base/js/helpers.js';

module.exports = function() {
  const buy = document.querySelector('.btn-buy');
  const popupOverlay = document.querySelector('.popup-overlay');
  const popup = document.querySelector('.popup');
  const close = popup.querySelector('.icon-close');
  const body = document.querySelector('body');

  buy.addEventListener('click', function() {
    popupOverlay.classList.add('visible');
    popup.classList.add('visible');
    body.classList.add('no-scroll');
    body.style.marginRight = measureWidthScroll() + 'px';
  });

  close.addEventListener('click', function() {
    popupOverlay.classList.remove('visible');
    popup.classList.remove('visible');
    body.classList.remove('no-scroll');
    body.style.marginRight = '';
  });
}
