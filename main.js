//selectors
const userLabel = document.querySelector('.user-container label');
const passLabel = document.querySelector('.password-container label');

const userInput = document.querySelector('#user');
const passInput = document.querySelector('#password');

const eyeDown = document.querySelector('.eye-down');
const eye = document.querySelector('.eye');

//input accessibility
const showLabel = (label) => {
    label.classList.remove('hide');
    
}

const hideLabel = (label, input) => {
    if(input.value == "") {
        label.classList.add('hide');
    }
}

const togglePass = () => {
    eyeDown.classList.toggle('hide');
    eye.classList.toggle('hide');
}

const viewPass = () => {
    togglePass();
    passInput.setAttribute('type', 'text');
}

const unviewPass = () => {
    togglePass();
    passInput.setAttribute('type', 'password');
}