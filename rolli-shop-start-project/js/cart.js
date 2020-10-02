//Находим обертку корзины
const cartWrapper = document.querySelector('.cart-wrapper');

//Проверка путой корзины
// let checkEmptyCart = () => {
//    let dataCartEmpty = document.querySelector('[data-cart-empty]');
//    if (cartWrapper.children > 0) {
//       ``    dataCartEmpty.style
//    }
// }

//Навешиваем событие клика на страницу
window.addEventListener('click', function (event) {

   //Если произошел клик по кнопке добавить в корзину
   if (event.target.hasAttribute('data-cart')) {
      console.log('Rolls has been added to cart');

      //Ищем карту товара по которой произошел клик
      const curentCard = event.target.closest('.card');

      //Подтягиваем информацию с карты товара по которой произошел клик
      const currentProductId = curentCard.dataset.id;
      const currentProductImg = curentCard.querySelector('.product-img');
      const currentItemTitle = curentCard.querySelector('.item-title');
      const currentTextMuted = curentCard.querySelector('.text-muted');
      const currentPriceWeight = curentCard.querySelector('.price__weight');
      const currentDataCounter = curentCard.querySelector('.items__current');
      const currentPriceCurrency = curentCard.querySelector('.price__currency');


      //Создаем проверку есть ли товар с таким id в корзине
      let currentCartItem = cartWrapper.querySelector(`[data-id = '${currentProductId}']`);
      console.log(currentCartItem);
      if (currentCartItem) {
         //Находим количество товара эллемента который уже есть в корзине
         let currentCartCounter = currentCartItem.querySelector('[data-counter]');

         //Добавляем к нему количество товара которое мы выбрали
         currentCartCounter.innerText = parseInt(currentCartCounter.innerText) + parseInt(currentDataCounter.innerText);
      }

      //Если товара нет, то мы его просто добавляем
      else {
         //Создаем HTML элемент для корзины
         const cartItem = `<div class="cart-item" data-id="${currentProductId}">
                              <div class="cart-item__top">
                                 <div class="cart-item__img">
                                    <img src="${currentProductImg.src}" alt="">
                                 </div>
                                 <div class="cart-item__desc">
                                    <div class="cart-item__title">${currentItemTitle.innerText}</div>
                                    <div class="cart-item__weight">${currentTextMuted.innerText} / ${currentPriceWeight.innerText}</div>
                                    <div class="cart-item__details">
                                       <div class="items items--small counter-wrapper">
                                          <div class="items__control" data-action="minus">-</div>
                                          <div class="items__current" data-counter="">${currentDataCounter.innerText}</div>
                                          <div class="items__control" data-action="plus">+</div>
                                       </div>
                                       <div class="price">
                                          <div class="price__currency">${currentPriceCurrency.innerText}</div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>`
         //Добавлляем в корзину полученую карточку товара
         cartWrapper.insertAdjacentHTML('beforeend', cartItem);
      }
      currentDataCounter.innerText = '1';
   }
})