import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));


const formData = {};  

function onFormSubmit(evt) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

}


function onTextareaInput(evt) {
formData[evt.target.name] = evt.target.value;
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

dataFromLocalStorage( );

function dataFromLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    email.value = data.email;
    message.value = data.message;
  }
}





