import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

}

function onTextareaInput(evt) {
  const message = evt.target.value;
  // localStorage.setItem(STORAGE_KEY, message);
  localStorage.setItem("message", JSON.stringify(message))
}




const formData = {};

refs.form.addEventListener('input', e => {
// console.log(e.target.name);
// console.log(e.target.value);

formData[e.target.name] = e.target.value;
localStorage.setItem("formData", JSON.stringify(formData))
console.log(formData);
});


function populateTextarea() {
   const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  
  }
}



