
// Disable Input With Empty Value (disableInputWithEmptyValue)
const disableInputWithEmptyValue = function(formName) {
  const inputsSearch = formName.querySelectorAll('.custom-input');
  const inputsSearchLength = inputsSearch.length;
  let i = 0;

  for (; i < inputsSearchLength; i++ ) {
    if ( inputsSearch[i].value === '' ) {
      inputsSearch[i].setAttribute('disabled', 'disabled');
    }
    else {
      inputsSearch[i].removeAttribute('disabled'); // TEMP
    }
  }
};


// Width scroll bar
const measureWidthScroll = function() {
  let scrollWidth, div;

  div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  return scrollWidth;
}


export { disableInputWithEmptyValue, measureWidthScroll };