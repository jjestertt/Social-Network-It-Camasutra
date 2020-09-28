const form = document.querySelector('.add-task__form');
const input = document.querySelector('.add-task__form-text');
const inputEmpty = document.querySelector('.tasks-list__item-empty');
const formList = document.querySelector('.tasks-list');

// Проверка пустого списка
let checkListEmpty = () => {
   if (formList.children.length > 1) {
      inputEmpty.style.display = "none";
   }
   else {
      inputEmpty.style.display = "block";
   }
}

// Добавление задачи на страницу
form.addEventListener('submit', (event) => {
   event.preventDefault();
   //Получаем значение формы
   const dataTask = input.value;
   //Забиваем значение в HTML код
   const htmlTask = `<li class="tasks-list__item">
                        <p class="tasks-list__item-text">${dataTask}</p>
                        <div class="tasks-list__buttons">
                           <button  class="button tasks-list__item-check"><span id='task-check' class="icon-checkmark"></button>
                           <button class="button tasks-list__item-delete"><span id='task-delete' class="icon-cross"></button>
                        </div>
                     </li>`;
   //Добавляем код на страницу
   formList.insertAdjacentHTML('afterBegin', htmlTask);
   //Проверяем, пустой ли список
   checkListEmpty();
   //Обнуляем форму
   input.value = '';
});

//Инициализация кнопки
formList.addEventListener('click', (event) => {
   //Удалить задание
   if (event.target.getAttribute('id') == 'task-delete') {
      event.target.closest('li').remove();
      checkListEmpty();
   }

   //Выполнить задание
   else if (event.target.getAttribute('id') == 'task-check') {
      const checkParentLi = event.target.closest('li');
      const paragraph = checkParentLi.querySelector('.tasks-list__item-text');
      const iconCheck = checkParentLi.querySelector('.icon-checkmark');

      //Присваиваем класc
      iconCheck.classList.toggle('icon-checkmark--complete');
      paragraph.classList.toggle('tasks-list__item-text--complete');
   }
});




