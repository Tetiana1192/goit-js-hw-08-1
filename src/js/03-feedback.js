import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onTextInput, 500));
formEl.addEventListener('submit', onFormSubmit);

getStorageData();


