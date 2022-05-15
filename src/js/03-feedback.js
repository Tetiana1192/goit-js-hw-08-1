import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const feedBackForm = document.querySelector('.feedback-form');   //дивимося чи працює форма
const textarea = document.querySelector('.feedback-form  textarea');

//  const selectedFeedBack = {};     //створюємо обьюкт 



textarea.addEventListener('input', evt => {
  throttle(onTextareaInput, 200);
  let persistedFeedBack = localStorage.getItem(STORAGE_KEY);    // беремо з локасторіджа що збережено 
    persistedFeedBack = persistedFeedBack ? JSON.parse(persistedFeedBack) : {};  //якщо там щось є то парсим його ,якщо нічого нема то фільтри починаються з пустого об`єкта 
    persistedFeedBack[evt.target.name] = evt.target.value;   //зберігаємо або добавляємо значення 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedFeedBack));
  

});


function onTextareaInput(event) {
  persistedFeedBack[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedFeedBack));
  
}

initForm(); //при ініцілізації форми витянули обєкт 
feedBackForm.addEventListener('submit', evt => {
  evt.preventDefault();
  // console.log(feedBackForm.elements);
  const formData = new FormData(feedBackForm);     // збирає всі значення полів в одне ціле 
  formData.forEach((value, name) => console.log(value, name));
});



//щоб зберігалися значення при перезагрузці потрібно зробити функцію 
function initForm() {
  let persistedFeedBack = localStorage.getItem(STORAGE_KEY);
  // щоб розпарсити потрібно зробити перевірку ,якщо фільтри є то зними будемо працювати ,якщо нема то не будем  
  if (persistedFeedBack) {
    persistedFeedBack = JSON.parse(persistedFeedBack);  //конструкція трай 
    // console.log(persistedFeedBack);
    Object.entries(persistedFeedBack).forEach(([name, value]) => {    //взяли всі його входження
      
      // feedBackForm.elements[name].value = value.email;
      

      if (name === 'message') {
        feedBackForm.elements[name].value = value;
        console.log('message');
      }

       if (name === 'email') {
         onTextareaInput.elements[name].value = value;
         console.log('email');
      }
     
      
    
    });
  }
};
// }якщо name === ‘message’ тоді feedBackForm.elements[name].value = value;
// якщо name === ‘name’ тоді feedBackForm.elements[name].value = value;

feedBackForm.addEventListener('reset', () => {
  localStorage.removeItem(STORAGE_KEY);
});