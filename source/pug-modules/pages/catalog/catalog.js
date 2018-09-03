import '../../../style/main.scss';
import './catalog.scss';

import inputSearch from '../../components/header/header.js';
import '../../components/panels/panel-catalog-filter/panel-catalog-filter.js';
import { pagination } from '../../components/pagination/pagination.js';

pagination.init(
  document.querySelector('.pagination'),

  {
    size: 30, // количество страниц
    page: 1,  // выбранная страница
    step: 3,   // количество показанный страниц До и ПОСЛЕ текущей

    buttonPrev: '.btn-page-prev',
    buttonNext: '.btn-page-next'
  },
);

inputSearch();

const boxs = document.querySelectorAll('.model-box');
console.log(boxs.length);