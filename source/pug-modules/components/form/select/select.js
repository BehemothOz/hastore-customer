
// close select (body)
const closeSelectOnBody = function(data) { // ??
  const body = document.querySelector('body');
  const allSelectors = document.querySelectorAll(data.selector);

  body.addEventListener('click', function(e) {
    const el = e.target;

    if ( !el.classList.contains(data.fieldSelector.slice(1)) &&
         !el.classList.contains(data.listSelector.slice(1)) &&
         !el.classList.contains(data.optionSelector.slice(1)))
    {
      allSelectors.forEach(function(el) {
        const fieldSelector = el.querySelector(data.fieldSelector);
        const listSelector = el.querySelector(data.listSelector);

        if (fieldSelector.classList.contains('active')) {
          fieldSelector.classList.remove('active')
        }

        if (listSelector.classList.contains('show')) {
          listSelector.classList.remove('show')
        }
      });
    }
  });
};

// toggle filed active (class)
const toggleActiveField = function(e, data) {
  const allField = document.querySelectorAll(data.fieldSelector);
  const currentFiled = e.target;

  allField.forEach(function(el) {
    if ( el !== currentFiled && el.classList.contains('active')) {
      el.classList.remove('active');
    }
  });

  currentFiled.classList.toggle('active');
  toggleOptions(e, data);
}

// show/hide select
const toggleOptions = function (e, data) {
  const allOptions = document.querySelectorAll(data.listSelector);
  const currentOptions = e.target.parentElement.querySelector(data.listSelector); // ?

  allOptions.forEach(function(el) {
    if ( el !== currentOptions && el.classList.contains('show')) {
      el.classList.remove('show');
    }
  });

  currentOptions.classList.toggle('show');
}

// set value option in field
const setValueOption = function (option, field, input, onSelect) {
  if (option.dataset.value === 'init') {
    field.textContent = '';
    input.value = '';
  }

  else {
    field.textContent = option.textContent;
    input.value = option.textContent;
  }

  field.click();

  if ( onSelect ) {
    onSelect(field, option.textContent)
  }
}

module.exports = function(data) {
  const selectBlock = document.querySelectorAll(data.selector);

  selectBlock.forEach(function (el, i) {
    const field = el.querySelector(data.fieldSelector);
    const option = el.querySelectorAll(data.optionSelector);
    const inputHidden = el.querySelector(data.inputHidden);

    field.addEventListener('click', function(e) {
      toggleActiveField(e, data);
    });

    option.forEach(function (el) {
      el.addEventListener('click', function(e) {
        setValueOption(e.target, field, inputHidden, data.onSelect);
      });
    });

  });

  closeSelectOnBody(data);
}