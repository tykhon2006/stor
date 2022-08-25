// добавляем товар в корзину
export function addToCart(e, title, price, elem, addCart) {
    let target = e.target;
    target.disabled = true;
    const itemId = target.dataset.id;
    const parentBox = target.parentElement;
    const itemTitle = parentBox.querySelector(title).textContent;
    const itemPrice = parentBox.querySelector(price).textContent;
    const itemImage = parentBox.querySelector("img").src;
    console.log(itemTitle, itemPrice, itemImage)
    if (!cartData.hasOwnProperty(itemId)) {
        cartData[itemId] = [itemTitle, itemPrice, itemImage];
    }
    if (!setCartData(cartData)) {
        target.disabled = false;
    }
    itemCount(elem);

    let alertProduct = document.createElement("div");
    alertProduct.className = "alert-product";
    alertProduct.innerHTML = `<p><span>${itemTitle}</span> added to cart</p>`;
    document.body.append(alertProduct);
    setTimeout(() => alertProduct.remove(), 3000);
    showItemCart(addCart);

}

//export class cartComponent extends HTMLElement {
//    connectedCallback() {
//        this.innerHTML = `
//    <div class="cart" id="cart">
//        <div class="cart__body">
//            <div class="cart__content" id="cart-content"></div>
//            <button class="btn cart__clear" id="clear-cart">Clear Cart</button>
//            <span class="cart__close" id="close-cart"></span>
//        </div>
//    </div>
//        `
//    }
//}
//
//export function showItemCart(addCart) {
//    const cartData = getCartData();
//    addCart.forEach((button) => {
//        if (cartData && Object.keys(cartData).length !== 0 && cartData.hasOwnProperty(button.dataset.id)) {
//            button.textContent = `Added to cart`;
//            button.classList.add("showItemCart");
//        }else{
//            button.textContent = `Add to cart`;
//            button.classList.remove("showItemCart");
//        }
//    });
//}