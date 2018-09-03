module.exports = function() {

  const headerSearch = document.querySelector('.header-search'),
        navigationCat = document.querySelector('.navigation-cat'),
        inputSearchWrap = headerSearch.querySelector('.input-search-wrap'),
        closeSearch = headerSearch.querySelector('.close-search'),
        inputSearch = headerSearch.querySelector('.input-search');

  const dataAnimation = {
    headerSearchMinLeft: 230,
    headerSearchMaxLeft: 1170,
    headerSearchWidth: 'auto',
  };

  const makeActiveInputSearch = function() {
    navigationCat.classList.add('hidden');
    headerSearch.style.left = dataAnimation.headerSearchMinLeft + 'px';
    headerSearch.style.width = dataAnimation.headerSearchWidth;
    inputSearchWrap.classList.add('change-width');
    closeSearch.classList.add('visible');
  };

  const makeInactiveInputSearch = function() {
    navigationCat.classList.remove('hidden');
    headerSearch.style.left = dataAnimation.headerSearchMaxLeft + 'px';
    inputSearchWrap.classList.remove('change-width');
    closeSearch.classList.remove('visible');
  };

  inputSearch.addEventListener('focus', makeActiveInputSearch);

  closeSearch.addEventListener('click', makeInactiveInputSearch);
};
