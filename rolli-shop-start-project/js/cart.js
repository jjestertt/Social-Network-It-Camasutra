//Находим обертку корзины
const cartWrapper = document.querySelector('.cart-wrapper');

//Проверка путой корзины
let checkEmptyCart = () => {
   //Находим текст "Корзина пуста"
   let dataCartEmpty = document.querySelector('[data-cart-empty]');
   let cartTotal = document.querySelector('.cart-total');
   let orderForm = document.querySelector('#order-form');

   //Если эллементы есть вкорзине, то скрываем надпись и показываем форму заказа
   if (cartWrapper.childElementCount > 0) {
      dataCartEmpty.style.display = 'none';
      cartTotal.style.display = 'block';
      orderForm.style.display = 'block';
   }
   //Иначе показываем ее
   else {
      dataCartEmpty.style.display = 'block';
      cartTotal.style.display = 'none';
      orderForm.style.display = 'none';
   }
   counterPrise();
}

//Добавляем эллемент в корзину
window.addEventListener('click', function (event) {

   //Если произошел клик по кнопке добавить в корзину
   if (event.target.hasAttribute('data-cart')) {
      console.log('Rolls has been added to cart');

      //Ищем карту товара по которой произошел клик
      const currentCard = event.target.closest('.card');

      //Подтягиваем информацию с карты товара по которой произошел клик в обьект
      const currentCardItem = {
         id: currentCard.dataset.id,
         productImgSrc: currentCard.querySelector('.product-img').src,
         title: currentCard.querySelector('.item-title').innerText,
         textMuted: currentCard.querySelector('.text-muted').innerText,
         priceWeight: currentCard.querySelector('.price__weight').innerText,
         dataCounter: currentCard.querySelector('.items__current').innerText,
         priceCurrency: currentCard.querySelector('.price__currency').innerText
      }
      //Создаем проверку есть ли товар с таким id в корзине
      let currentCartItem = cartWrapper.querySelector(`[data-id = '${currentCardItem.id}']`);
      if (currentCartItem) {
         //Находим количество товара эллемента который уже есть в корзине
         let currentCartCounter = currentCartItem.querySelector('[data-counter]');

         //Добавляем к нему количество товара которое мы выбрали
         currentCartCounter.innerText = parseInt(currentCartCounter.innerText) + parseInt(currentCardItem.dataCounter);
      }

      //Если товара нет, то мы его просто добавляем
      else {
         //Создаем HTML элемент для корзины
         const cartItem = `<div class="cart-item" data-id="${currentCardItem.id}">
                              <div class="cart-item__top">
                                 <div class="cart-item__img">
                                    <img src="${currentCardItem.productImgSrc}" alt="">
                                 </div>
                                 <div class="cart-item__desc">
                                    <div class="cart-item__title">${currentCardItem.title}</div>
                                    <div class="cart-item__weight">${currentCardItem.textMuted} / ${currentCardItem.priceWeight}</div>
                                    <div class="cart-item__details">
                                       <div class="items items--small counter-wrapper">
                                          <div class="items__control" data-action="minus">-</div>
                                          <div class="items__current" data-counter="">${currentCardItem.dataCounter}</div>
                                          <div class="items__control" data-action="plus" >+</div>
                                       </div>
                                       <div class="price">
                                          <div class="price__currency">${currentCardItem.priceCurrency}</div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>`
         //Добавлляем в корзину полученую карточку товара
         cartWrapper.insertAdjacentHTML('beforeend', cartItem);
      }

      //Обнуляем счетчик карточки
      currentCard.querySelector('.items__current').innerText = '1';
      //Проверяем корзину на пустоту
      checkEmptyCart()
   }
})


//Удаление товаров из корзины
cartWrapper.addEventListener('click', (event) => {
   if (event.target.dataset.action === 'minus') {
      //Ищем ближайшего родителя (карту)
      const currentCartItem = event.target.closest('.cart-item');
      let currentCartItemCounter = currentCartItem.querySelector('[data-counter]');
      if (currentCartItemCounter.innerText === '1') {
         //Удаляем товар
         currentCartItem.remove();
         //Проверяем корзину на пустоту
         checkEmptyCart();
      }
   }
})



//Функция пересчета цен
//Слушаем нажатия на кнопки + - у айтема корзины
function counterPrise() {
   //Создаем переменную цены со значением 0
   let totalPrise = 0;
   //Ищем все карточки товара в корзине
   let currentItem = cartWrapper.querySelectorAll('.cart-item');
   //Методом forEach перебираем все карточки товара
   currentItem.forEach(function (item) {
      //Цена 1 айтема
      let itemPrice = item.querySelector('.price__currency').innerText;
      //Количество товара
      let itemCounter = item.querySelector('[data-counter]').innerText;
      //Сумма 1го айтема(Зависит от количества)
      let prise = parseInt(itemPrice) * parseInt(itemCounter);
      // Прибавляем сумму 1 айтема к общей сумме
      totalPrise += prise;
   });
   //Записываем общуюю сумму в корзине
   document.querySelector('.total-price').innerText = totalPrise;
}