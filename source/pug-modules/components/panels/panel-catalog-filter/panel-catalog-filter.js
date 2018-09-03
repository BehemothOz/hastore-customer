import axios from 'axios';
import customSelect from '../../form/select/select.js';
import { disableInputWithEmptyValue } from '../../../base/js/helpers.js';
import getAllModelBoxesFromData from '../../../base/js/box-template.js';

const formFilter = document.querySelector('.form-filter'),
      formInput = formFilter.querySelectorAll('.custom-input'),
      formCheckbox = formFilter.querySelectorAll('.custom-checkbox');


// Инизиализируем фильтр, если есть search параметры
const initFilter = function() {
  if (location.search !== '') {
    const param = location.search.substr(1).split('&');

    param.forEach((param) => {
      const [key, value] = param.split('=');
      const initElement = formFilter.querySelectorAll('[name=' + key + ']');

      if ( initElement.length >= 1 && initElement[0].type === 'checkbox' ) {
        for (let i = 0; i < initElement.length; i++ ) {
          if (initElement[i].value === value) {
            initElement[i].setAttribute('checked', 'checked');
          }
        }
      }

      else if ( initElement.length === 1 && initElement[0].type === 'hidden' ) {
        initElement[0].value = value;
        initElement[0].previousElementSibling.textContent = value;
      }
    })
  }
};


// Отслеживаем изменения элементов формы
const handleChange = function() {
  let formData;
  let params = [];

  disableInputWithEmptyValue(formFilter);
  formData = new FormData(formFilter);

  for (let pair of formData.entries()) {
    params.push(pair[0] + '=' + pair[1]);
  };

  // axios.get(origin + '/catalog' + '?' + params.join('&'))

  axios.get('http://www.mocky.io/v2/5a0044f42e0000173aca5c14').then(function (response) {
    getAllModelBoxesFromData('.panel-catalog-list .panel-body', response.data);
  })

  window.history.replaceState(null, null, origin + '/catalog' + '?' + params.join('&'));
  // disableInputWithEmptyValue(formFilter);
};


// Вешаем события на checkboxs
const addHandledElementsForm = function(elements) {
  const elementsLenght = elements.length;
  let i;

  for (i = 0; i < elementsLenght; i++ ) {
    elements[i].addEventListener('change', handleChange);
  }
};

// Вызываем событие 'change' на checkbox-s
addHandledElementsForm(formCheckbox);

// Вызываем инизиализацию
initFilter();

customSelect({
  selector: '.custom-select',
  fieldSelector: '.custom-select-field',
  listSelector: '.custom-select-options',
  optionSelector: '.custom-select-option',
  inputHidden: '.custom-input',
  onSelect: function(field, value) {
      handleChange();
  }
});
