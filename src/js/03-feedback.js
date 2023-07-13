import throttle from "lodash.throttle";

const DATA_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);


let dataForm = JSON.parse(localStorage.getItem(DATA_KEY)) || {};
const {email, message} = form.elements;
 

function onInput() {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(DATA_KEY, JSON.stringify(dataForm));
}

function onSubmit(event) {
    event.preventDefault();

    const {email, message} = event.currentTarget.elements;
  if(email.value === "" || message.value === "") {
    alert('Всі поля повинні бути заповнені!');
  } else {
    dataForm = { email: email.value, message: message.value }
    console.log(dataForm);
  }
  localStorage.removeItem(DATA_KEY);
  form.reset();
  dataForm = {};
}

