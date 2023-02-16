"use strict"

import { renderCart, clearCart as clearCartFunc, addToCart as addToCartFunc, itemCount, showItemCart } from "./cart.js";

const addToCart = document.querySelectorAll(".product__add-cart");
const cartCount = document.getElementById("cartCount");
const cartContent = document.getElementById("cart-content");
const clearCart = document.getElementById("clear-cart");
const openCart = document.getElementById("incase");

itemCount(cartCount);
openCart.addEventListener("click", openModal);
clearCart.addEventListener("click", clearCartFunc.bind(this, cartContent, cartCount, addToCart));

function openModal() {
    renderCart(cartContent, cartCount, addToCart);
}

addToCart.forEach((button) => {
    button.addEventListener("click", e => addToCartFunc(e, ".product__title", ".product__price", cartCount, addToCart));
});
showItemCart(addToCart);