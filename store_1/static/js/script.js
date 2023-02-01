"use strict"

const KEY = "FE412FRRVRSKO929MFE"

//Добавляем товар в хранилище

// добавим данные в хранилище
function setCartData(obj) {
    localStorage.setItem(KEY, JSON.stringify(obj));
    return false;
}

// получаем данные из хранилища
function getCartData() {
    return JSON.parse(localStorage.getItem(KEY));
}

// очищаем корзину
function clearCart() {
    localStorage.removeItem(KEY);
}

// добавляем товар в корзину
function addToCart(e, title, price, elem, addCart, ) {
    let target = e.target;
    target.disabled = true;
    const cartData = getCartData() || {};
    const itemId = target.dataset.id;
    const parentBox = target.parentElement;
    const itemTitle = parentBox.querySelector(title).textContent;
    const itemPrice = parentBox.querySelector(price).textContent;
    const itemImage = parentBox.querySelector("img").src;
    if (!cartData.hasOwnProperty(itemId)) {
        cartData[itemId] = [itemTitle, itemPrice, itemImage];
    }
    if (!setCartData(cartData)) {
        target.disabled = false;
    }
    // itemCount(elem);

    // let alertProduct = document.createElement("div");
    // alertProduct.className = "alert-product";
    // alertProduct.innerHTML = `<p><span>${itemTitle}</span> added to cart</p>`;
    // document.body.append(alertProduct);
    // setTimeout(() => alertProduct.remove(), 3000);
    // showItemCart(addCart);

}

function showItemCart(addCart) {
    const cartData = getCartData();
    addCart.forEach((button) => {
        if (cartData && Object.keys(cartData).length !== 0 && cartData.hasOwnProperty(button.dataset.pk)) {
            button.textContent = `Added to cart`;
            button.classList.add("showItemCart");
        } else {
            button.textContent = `Add to cart`;
            button.classList.remove("showItemCart");
        }
    });
}