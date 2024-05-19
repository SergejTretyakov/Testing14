const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);
// хлебные крошки
function fillBreadcrumb(){ 
  var breadcrumb = document.getElementById("brcrumb");
  var category = document.createElement("li");
  category.className = "breadcrumb-item";
  category.textContent = products[id-1].header;
  breadcrumb.appendChild(category);
  var prod = document.createElement("a");
  prod.className = "breadcrumb-item active";
  prod.ariaCurrent="page";
  prod.textContent = products[id-1].title;
  breadcrumb.appendChild(prod);
  document.title = products[id-1].title;
}
window.addEventListener("load0", fillBreadcrumb());

function changeInfo(id){
  var img = document.getElementById("image");
  var h2 = document.getElementById("title");
  var h4 = document.getElementById("cost");
  var but = document.getElementById("add");
  but.setAttribute('data-product-id', products[id].id);
  but.onclick = function(){
    addToCartforPage(this);
  }
  img.src = products[id-1].full;
  h2.textContent = products[id-1].title;
  h4.textContent = products[id-1].price + "Руб";
}