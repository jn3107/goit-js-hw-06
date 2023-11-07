const formName = document.querySelector('.login-form');

formName.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(formName);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    if (!formObject.email || !formObject.password) {
        alert('Всі поля повинні бути заповнені!');
    } else {
        console.log(formObject);
    }
    
    formName.reset();
});
