import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const feedBackForm = document.querySelector('.feedback-form');



feedBackForm.addEventListener('input', throttle(onTextInput, 500));
feedBackForm.addEventListener('submit', onFormSubmit);



let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onTextInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  formData = {};
}

dataFromLocalStorage();

function dataFromLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    feedBackForm.elements.email.value = savedData.email || '';
    feedBackForm.elements.message.value = savedData.message || '';
  }
}















