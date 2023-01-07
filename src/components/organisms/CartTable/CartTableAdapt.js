import { Component } from "../../../core/Component/Component";

export class CartTableAdapt extends Component {

    render() {
        return `
        <div class="cart__adapt">
            <div class="cart__adapt-product">
                <img src="../../assets/images/gallery/gallery-img1.jpg" alt="cart-image" class="cart__cart-table-img">
                <div class="cart__adapt-product-wrapper">
                    <div class="cart__adapt-product-text-wrapper">
                        <p class="cart__cart-table-product-title">
                            Serene Linen Deluxe Cloud
                        </p>
                        <p class="cart__cart-table-product-price">£2,500.00</p>
                    </div>
                    <div class="cart__adapt-buttons-wrapper">
                        <div class="cart__cart-table-row-count-wrapper">
                            <button class="cart__cart-table-count-button">-</button>
                            <p class="cart__cart-table-count">1</p>
                            <button class="cart__cart-table-count-button">+</button>
                        </div>
                        <button class="cart__cart-table-delete-btn">
                            Remove
                            <img src="../../assets/images/icons/cart-trash-btn.svg" alt="delete-cart-button">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-cart-table-adapt', CartTableAdapt);