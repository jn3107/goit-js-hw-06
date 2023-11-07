function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesQuantity = document.querySelector('#controls > input');
const containerEl = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = Number(boxesQuantity.value);
  const hasBoxesQuantity = containerEl.childElementCount;
  let markup = '';

  if (!hasBoxesQuantity) {
    for (let i = 0; i < amount; i += 1) {
      markup += `<div style='background-color: ${getRandomHexColor()}; width: ${
        30 + i * 10 + 'px'
      }; height: ${30 + i * 10 + 'px'}'></div>`;
    }
  } else {
    for (let i = hasBoxesQuantity; i < amount + hasBoxesQuantity; i += 1) {
      markup += `<div style='background-color: ${getRandomHexColor()}; width: ${
        30 + i * 10 + 'px'
      }; height: ${30 + i * 10 + 'px'}'></div>`;
    }
  }
  containerEl.insertAdjacentHTML('beforeend', markup);
  boxesQuantity.value = '';
};

function destroyBoxes() {
  boxesQuantity.value = '';
  containerEl.innerHTML = '';
};

