const inputName = document.querySelector('#validation-input');


inputName.addEventListener('blur', () => {
    const inputValue = inputName.value;
    if (inputValue.length === parseInt(inputName.getAttribute('data-length'))) {
        inputName.classList.add('valid');
        inputName.classList.remove('invalid');
    } else {
        inputName.classList.add('invalid');
        inputName.classList.remove('valid');
    }
});



