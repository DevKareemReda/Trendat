let calcHeader = document.querySelector("header");

document.body.style.paddingTop = calcHeader.clientHeight + "px";

window.onresize = function () {
document.body.style.paddingTop = calcHeader.clientHeight + "px";

}


let shoppingCart = document.querySelector(".shopping");
let closeShopping = document.querySelector(".cart-overlay .close");
let cartOverlay = document.querySelector(".cart-overlay")
let cartInner = document.querySelector(".cart-inner")
shoppingCart.onclick = function () {
  cartOverlay.classList.add("active")
  cartInner.classList.add("active")
}

closeShopping.onclick = function () {
  cartOverlay.classList.remove("active")
  cartInner.classList.remove("active")
}