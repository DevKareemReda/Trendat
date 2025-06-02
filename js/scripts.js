

let shopping = document.querySelector(".fa-cart-shopping");
let closeShopping = document.querySelector(".cart-overlay .close");
let cartOverlay = document.querySelector(".cart-overlay")
let cartInner = document.querySelector(".cart-inner")
shopping.onclick = function () {
  cartOverlay.classList.add("active")
  cartInner.classList.add("active")
}

closeShopping.onclick = function () {
  cartOverlay.classList.remove("active")
  cartInner.classList.remove("active")
}