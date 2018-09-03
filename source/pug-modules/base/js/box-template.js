
const getAllModelBoxesFromData = (container, data) => {
  const containerBox = document.querySelector(container);
  const fragment = document.createDocumentFragment();


  const getModelBoxFromTemplate = (data) => {
    const modelBoxTemplate = document.querySelector(`#model-box`);
    let element;

    element = (`content` in modelBoxTemplate)
                ? modelBoxTemplate.content.querySelector('.model-box').cloneNode(true)
                : modelBoxTemplate.querySelector('.model-box').cloneNode(true);

    element.querySelector('.name').textContent = data.name;
    element.querySelector('.price-count').textContent = data.price;

    return element;
  };


  data.forEach(modelBox => {
    const resultBox =  getModelBoxFromTemplate(modelBox);
    fragment.appendChild(resultBox)
  });

  containerBox.innerHTML = ''; // ?
  containerBox.appendChild(fragment);
}

export default getAllModelBoxesFromData;
