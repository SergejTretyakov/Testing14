var d = document,
    itemBox = d.querySelectorAll('.col'), // блок каждого товара
    cartCont = d.getElementById('cart-body'); // блок вывода данных корзины
// Функция кроссбраузерной установка обработчика событий

// Получаем данные из LocalStorage
function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}
function updateCartData(btn, count){
  btn.disabled = true; // блокируем кнопку на время операции с корзиной
  
    var cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
    var itemId = btn.getAttribute('data-product-id'); // ID товара
    cartData[itemId] = [itemId, count];
    if(cartData[itemId][1] == 0)
    {
      delete cartData[itemId];
    }
    if (!setCartData(cartData)) { // Обновляем данные в LocalStorage
      btn.disabled = false; // разблокируем кнопку после обновления LS
    }
    if (Object.getOwnPropertyNames(cartData).length == 0)
    deleteData();
    openCart();
    updateCounter();
    return false;
}
// Записываем данные в LocalStorage
function setCartData(o){
  localStorage.setItem('cart', JSON.stringify(o));

  return false;
}
function clearCartPage(){
  var container = document.getElementById("cart-body");
  container.innerHTML='';
}
function deleteData(){
    localStorage.clear();
    location.reload();
    return false;
  }
function addToCart(btn) {
    btn.disabled = true; // блокируем кнопку на время операции с корзиной
  
    var cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
    var itemId = btn.getAttribute('data-product-id'); // ID товара
    if (cartData[itemId]==null){
      cartData[itemId] = [itemId, 1];}
    else{
      cartData[itemId][1] +=1;
    }
    
  
    if (!setCartData(cartData)) { // Обновляем данные в LocalStorage
      btn.disabled = false; // разблокируем кнопку после обновления LS
    }
    updateCounter();
    return false;
  }
  function addToCartforPage(btn) {
    btn.disabled = true; // блокируем кнопку на время операции с корзиной

    var colvo = document.getElementById("colvo").value;
    var cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
    var itemId = btn.getAttribute('data-product-id'); // ID товара
    if (cartData[itemId]==null){
      cartData[itemId] = [itemId, parseInt(colvo)];}
    else{
      cartData[itemId][1] +=parseInt(colvo);
    }
    
  
    if (!setCartData(cartData)) { // Обновляем данные в LocalStorage
      btn.disabled = false; // разблокируем кнопку после обновления LS
    }
    updateCounter();
    return false;
  }
  // Открываем корзину со списком добавленных товаров
  function openCart(){
    clearCartPage();
    var cartData = getCartData(), // вытаскиваем все данные корзины
        totalItems = '';
    // если что-то в корзине уже есть, начинаем формировать данные для вывода
    if(cartData !== null){
        var container = document.getElementById("cart-body");
      for(var items in cartData){
        id = parseInt(items);
        product = products[id-1];
        //
      var card = document.createElement("div");
      card.className = "row";
      card.id = "card-id";
      //фото товара
      //===========================================
      var img_c = document.createElement("div");
      img_c.className = "col";
      img_c.id = "img_c";
      card.appendChild(img_c);
      var image = document.createElement("img");
      image.src = product.image;
      image.alt = "Product Image";
      img_c.appendChild(image);
      //===========================================
      //название,  кнопка цена,
      //название
      var title_c = document.createElement("div");
      title_c.className = "col";
      card.appendChild(title_c);
      var title = document.createElement("h5");
      title.className = "card-title";
      title.id = "product-title";
      title.textContent = product.title;
      title_c.appendChild(title);

      var btns = document.createElement("div");
      btns.className = "col";
      btns.id = "btns";
      card.appendChild(btns);
      var minus = document.createElement("button");
      minus.className = "btn_count";
      minus.textContent = "-";
      minus.setAttribute('data-product-id', product.id);
      minus.onclick = function() {
        var counter = this.nextElementSibling;
        if (counter.value>1)
        counter.value = parseInt(counter.value) - 1;
      else counter.value = 0;
      updateCartData(this, counter.value);
      };
      btns.appendChild(minus);
      var prod_count = document.createElement("input");
      prod_count.type = "number";
      prod_count.className = "product-count";
      prod_count.id = "pr-counter";
      prod_count.value = cartData[items][1];
      prod_count.oninput = function(e){
        if (prod_count.value<1){
          prod_count.value=1;
        }
      }
      btns.appendChild(prod_count);
      var plus = document.createElement("button");
      plus.className = "btn_count";
      plus.textContent = "+";
      plus.setAttribute('data-product-id', product.id);
      plus.onclick = function() {
        var counter = this.previousElementSibling;
        counter.value = parseInt(counter.value) + 1;
        updateCartData(this, counter.value);
      };
      btns.appendChild(plus);

      //цена
      var price_c = document.createElement("div");
      price_c.className = "col";
      card.appendChild(price_c);
      var price = document.createElement("span");
      price.className = "card-text";
      price.id = "product-price";
      price.textContent = "Р" + (product.price*cartData[items][1]).toFixed(2);
      price_c.appendChild(price);
      
      container.appendChild(card);
      Cost(cartData);
      }
      
    return false;
    } else {
      // если в корзине пусто, то сигнализируем об этом
      cartCont.innerHTML = 'В корзине пусто!';
    }
    
  }
  function updatecost(){
   
  }
  function Cost(cartData){

    var allcost = 0;
    for(var items in cartData){
      id = parseInt(items);
      product = products[id-1];
      allcost+=product.price*cartData[items][1]
    }
    var content = document.getElementById("sum");
    content.textContent = allcost.toFixed(2);
  }
  function updateCounter(){
    count = 0;
    var counter = document.getElementById("cart_num");
    var cartData = getCartData();
    if(cartData !== null){
    for(var items in cartData){
      if (cartData[items]!=null)
      count+=parseInt(cartData[items][1]);
    }
  }
  counter.textContent=count;

}
  window.addEventListener("load", openCart);
  

  