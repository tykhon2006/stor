"use strict"

const addToCart = document.querySelectorAll(".product__add-cart");
const cart = document.getElementById("cart");

const productItem = document.querySelectorAll(".product__item");

addToCart.forEach((button) => {
    button.addEventListener("click", e => addToCartFunc(e, ".product__title", ".product__price > span", cartCount, addToCart));
});
showItemCart(addToCart);