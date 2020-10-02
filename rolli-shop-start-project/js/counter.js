//Слушаем клик на странице
window.addEventListener('click', function (event) {
   if (event.target.hasAttribute('data-action')) {
      //Ищем родителя кнопок
      const counterWrapper = event.target.closest('.counter-wrapper');
      //Ищем счетчик 
      let dataCounter = counterWrapper.querySelector('[data-counter]');

      // Если + Увеличиваем значение счетчика
      if (event.target.dataset.action === 'plus') {
         // Увеличиваем счетчик
         dataCounter.innerText = ++dataCounter.innerText;
      }

      //Если - Уменьшаем значение счетчика
      else if (event.target.dataset.action === 'minus') {
         // Уменьшаем счетчик если он больше 1 
         if (dataCounter.innerText > 1) {
            dataCounter.innerText = --dataCounter.innerText;
         }
      }
   }
});