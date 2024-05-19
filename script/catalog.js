const products = [
    {
        'id' : 1,
        'header' : 'Мангалы',
        'image' : "resources/catalog/mangal35075.png",
        'title' : 'Мангал сварной 3*50*75',
        'price' : 5135,
        'full' : "resources/catalog/mangal35075full.jpg"
    },
    {
        'id' : 2,
        'header' : 'Мангалы',
        'image' : 'resources/catalog/mangal23255.png',
        'title' : 'Мангал сварной 2*32*55',
        'price' : 3250,
        'full' : "resources/catalog/mangal23255full.jpg"
    },
    {
        'id' : 3,
        'header' : 'Мангалы',
        'image' : 'resources/catalog/mangal34075.png',
        'title' : 'Мангал сварной 3*40*75',
        'price' : 4615,
        'full' : 'resources/catalog/mangal34075full.jpg'
    },
    {
        'id' : 4,
        'header' : 'Мангалы',
        'image' : 'resources/catalog/mangal2400750.png',
        'title' : 'Мангал сборный 2*400*750',
        'price' : 1950,
        'full' : 'resources/catalog/mangal2400750full.jpg'
    },
    {
        'id' : 5,
        'header' : 'Наборы',
        'image' : 'resources/catalog/nabor1.png',
        'title' : 'Набор для пикника "Гранд Пикник №1 ЛФ"',
        'price' : 11450,
        'full' : 'resources/catalog/nabor1full.jpg'
    },
    {
        'id' : 6,
        'header' : 'Наборы',
        'image' : 'resources/catalog/nabor4.png',
        'title' : 'Набор для пикника "Гранд Пикник №4"',
        'price' : 8850,
        'full' : 'resources/catalog/nabor4full.jpg'
    },
    {
        'id' : 7,
        'header' : 'Наборы',
        'image' : 'resources/catalog/nabor9.png',
        'title' : 'Набор для пикника "Гранд Пикник №9"',
        'price' : 3650,
        'full' : 'resources/catalog/nabor9full.jpg'
    },
    {
        'id' : 8,
        'header' : 'Наборы',
        'image' : 'resources/catalog/nabor12.png',
        'title' : 'Набор для пикника "Гранд Пикник №12"',
        'price' : 5200,
        'full' : 'resources/catalog/nabor12full.jpg'
    },
    {
        'id' : 9,
        'header' : 'Наборы',
        'image' : 'resources/catalog/naborlf.png',
        'title' : 'Набор для пикника "Гранд Пикник ЛФ"',
        'price' : 11300,
        'full' : 'resources/catalog/naborlffull.jpg'
    }

];
function fillProductCards() {
    var container = document.getElementById("products");
    var arr = getRange();
    for (i = arr[0]; i <= arr[1]; i++) {
        //берём элемент массива карточек каталога
      var product = products[i];
      //формируем тело карточки
      var card = document.createElement("div");
      card.className = "col";
      card.id = "card-id";
      card.style = "width=277px;";
      //фото товара
      var ref = document.createElement("a");
      ref.href = "product.html?id=" + product.id;
      card.appendChild(ref);
      var image = document.createElement("img");
      image.src = product.image;
      image.alt = "Product Image";
      ref.appendChild(image);
      //название, цена, кнопка
      var card_body = document.createElement("div");
      card_body.className = "card-body";
      card.appendChild(card_body);
      //название
      var title = document.createElement("h5");
      title.className = "card-title";
      title.id = "product-title";
      title.textContent = product.title;
      card_body.appendChild(title);
      //цена
      var price = document.createElement("span");
      price.className = "card-text";
      price.id = "product-price";
      price.textContent = "Р" + product.price.toFixed(2);
      card_body.appendChild(price);

      var bcontainer = document.createElement("div");
      bcontainer.className = "button-container";
      card_body.appendChild(bcontainer);
      var button = document.createElement("button");
      button.className = "btnA";
      button.setAttribute('data-product-id', product.id);
      button.onclick = function(){
        addToCart(this);
      }
      button.textContent = "В корзину";
      bcontainer.appendChild(button);
  
      container.appendChild(card);
    }
  }
function clearProductCards(){
    var container = document.getElementById("products");
    container.innerHTML='';
}
function createPagination(){
    var cont = document.getElementById("paginationID")
    var prev = document.createElement("li");
    prev.className = "page-item";
    cont.appendChild(prev);
    var prevbut = document.createElement("button");
    prevbut.className = "btn";
    prevbut.id = "previousPage";
    prevbut.textContent = "Предыдущая";
    prevbut.onclick = function() {
        previousPage();
    };
    prev.appendChild(prevbut);
    if (getPages()==1)
    {
        var page1 = document.createElement("li");
        page1.className = "page-item";
        cont.appendChild(page1);
        var page11 = document.createElement("div");
        page11.className = "page-link";
        page11.id = "current-page";
        page11.innerText = "1";
        page1.appendChild(page11);
    }
    else if (getPages()==2)
    {
        var page1 = document.createElement("li");
        page1.className = "page-item";
        cont.appendChild(page1);
        var page11 = document.createElement("div");
        page11.className = "page-link";
        page11.id = "current-page";
        page11.innerText = "1";
        page1.appendChild(page11);
        var page2 = document.createElement("li");
        page2.className = "page-item";
        cont.appendChild(page2);
        var page22 = document.createElement("div");
        page22.className = "page-link";
        page22.id = "page-sec";
        page22.innerText = "2";
        page2.appendChild(page22);
    }
    else if (getPages()>=3){
        var page1 = document.createElement("li");
        page1.className = "page-item";
        cont.appendChild(page1);
        var page11 = document.createElement("div");
        page11.className = "page-link";
        page11.id = "current-page";
        page11.innerText = "1";
        page1.appendChild(page11);
        var page2 = document.createElement("li");
        page2.className = "page-item";
        cont.appendChild(page2);
        var page22 = document.createElement("div");
        page22.className = "page-link";
        page22.id = "page-sec";
        page22.innerText = "2";
        page2.appendChild(page22);
        var page3 = document.createElement("li");
        page3.className = "page-item";
        cont.appendChild(page3);
        var page33 = document.createElement("div");
        page33.className = "page-link";
        page33.id = "page-third";
        page33.innerText = "3";
        page3.appendChild(page33);
    }
    var next = document.createElement("li");
    next.className = "page-item";
    cont.appendChild(next);
    var nextbut = document.createElement("button");
    nextbut.className = "btn";
    nextbut.id = "nextPage";
    nextbut.textContent = "Следующая";
    nextbut.onclick = function() {
        nextPage();
    };
    next.appendChild(nextbut);

}
window.addEventListener("load0", createPagination());
  window.addEventListener("load0",fillProductCards());
 



function getPage()
{
    var page = document.getElementById('current-page');
    var previous = document.getElementById('prev');
    currentpage = parseInt(page.textContent);
    return currentpage;
}
function getPages(){
    return Math.ceil(products.length/8);
}
function getRange(){
    var arr = [];
    if (getPage()==1)
    {
        arr[0] = getPage() - 1;
    }
    else
    {
        arr[0] = (getPage()-1)*8;
    }
    if (arr[0]+7>products.length)
    {
    arr[1]= products.length;
    }
    else arr[1]=arr[0]+7;
    return arr;
}

function previousPage(){
    var curPage = document.getElementById("current-page");
    var Page2 = document.getElementById("page-sec");
    var Page3 = document.getElementById("page-third");
    var curpageint = parseInt(curPage.innerText);
    if (curpageint>1){
        curPage.id = "page-sec";
        Page2.id = "current-page";
    }
    else if (parseInt(Page3.innerText)==getPages()){
        curPage.id = "page-third";
        Page3.id = "current-page";
    }
    clearProductCards();
    fillProductCards();
}
function nextPage(){
    var curPage = document.getElementById("current-page");
    var Page2 = document.getElementById("page-sec");
    var Page3 = document.getElementById("page-third");
    var curpageint = parseInt(curPage.innerText);
    if (curpageint==1){
        curPage.id = "page-sec";
        Page2.id = "current-page";
    }
    else if (parseInt(Page3.innerText)==getPages()){
        curPage.id = "page-third";
        Page3.id = "current-page";
    }
    
    clearProductCards();
    fillProductCards();
}
document.addEventListener('DOMContentLoaded', function() {
    updateCounter();
  });