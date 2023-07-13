import throttle from "lodash.throttle";

const DATA_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let dataForm = JSON.parse(localStorage.getItem(DATA_KEY)) || {};
const {email, message} = form.elements;
reloadPage();

// Заповнення полів форми зі збережених даних
function reloadPage() {
  if(dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
  }
 


function onInput() {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(DATA_KEY, JSON.stringify(dataForm));
}

function onSubmit(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    alert('Всі поля повинні бути заповнені!');
  } else {
    console.log(dataForm);
  }

  form.reset();
  dataForm = {};

}


