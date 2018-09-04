import customSelect from '../../form/select/select.js';
import { disableInputWithEmptyValue } from '../../../base/js/helpers.js';

const btnSearch = document.querySelector('.btn-search');
const formSearch = document.querySelector('.form-search');


// Собираем значения из формы (редирект в catalog)
formSearch.addEventListener('submit', function(e) {
  disableInputWithEmptyValue(formSearch);

  /* Временный вызов (для примера работоспособности)
  Удалить, когда будет прописан запрос
  Т.к. обновление страницы сброить все disable у input */
  disableInputWithEmptyValue(formSearch);
});

customSelect({
  selector: '.custom-select',
  fieldSelector: '.custom-select-field',
  listSelector: '.custom-select-options',
  optionSelector: '.custom-select-option',
  inputHidden: '.custom-input'
});
