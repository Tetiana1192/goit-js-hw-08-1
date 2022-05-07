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
    
     formData = {};