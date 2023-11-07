const counterValue = document.querySelector('#value');
console.log(counterValue);

const counterDecrement = document.querySelector('button[data-action="decrement"]');
console.log(counterDecrement);

const counterIncrement = document.querySelector('button[data-action="increment"]');
console.log(counterIncrement);


counterDecrement.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
});

counterIncrement.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
});


