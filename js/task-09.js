const buttonEL = document.querySelector('.change-color');
console.log(buttonEL);

const counterColor = document.querySelector('.color');
console.log(counterColor);

const container = document.querySelector('div');
console.log(container);

buttonEL.addEventListener('click', () => {
  container.style.backgroundColor = getRandomHexColor();
  counterColor.textContent = (getRandomHexColor());
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};