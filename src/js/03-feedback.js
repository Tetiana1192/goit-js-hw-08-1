import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const mail = form.querySelector('input');
const message = form.querySelector('textarea');

const formValue = ()=>{
    const values = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (!values) {return;}
mail.value = values.mail;
message.value= values.message;
}


const saveFormValue = (e) => {
    localStorage.setItem("feedback-form-state", `{"mail":"${mail.value}","message":"${message.value}"}`);
}

const formSubmit = e =>{
    e.preventDefault();
    console.log({mail: mail.value,message: message.value});
    mail.value='';
    message.value='';
    localStorage.removeItem('feedback-form-state');

}
form.addEventListener("input", throttle (saveFormValue ,  500 ));
form.addEventListener('submit',formSubmit);
formValue();