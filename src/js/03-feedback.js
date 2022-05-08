import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();


function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}


function onFormSubmit(evt) {
  evt.preventDefault();

  
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
    

const formData = {};

refs.form.addEventListener('input', e => {
// console.log(e.target.name);
// console.log(e.target.value);

formData[e.target.name] = e.target.value;

console.log(formData);
});




function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    formEl.elements.email.value = savedMessage.email || '';
    formEl.elements.message.value = savedMessage.message || '';
  }
}
