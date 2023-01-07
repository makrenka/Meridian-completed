import { Component } from "../../../core/Component/Component";

export class CartSummaryAdapt extends Component {

    render() {
        return `
        <form class="cart__adapt-summary">
            <div class="container">
                <div class="cart__summary-body">
                    <div class="cart__summary-body-subtotal-wrapper">
                        <p class="cart__summary-body-subtotal">Subtotal</p>
                        <p class="cart__summary-body-subtotal-value">£5,000.00</p>
                    </div>
                    <p class="cart__summary-body-tax">
                        (includes £416.67 20% VAT)
                    </p>
                    <div class="cart__summary-body-input">
                        <div class="cart__summary-body-input-wrapper">
                            <input type="radio" value="standard-shipping" class="cart__summary-body-input-btn"
                                name="shipping" id="standardShipping" checked>
                            <label for="standardShipping" class="cart__summary-body-input-text">
                                Standard Free Shipping
                            </label>
                        </div>
                        <p class="cart__summary-body-input-price">£00.00</p>
                    </div>
                    <div class="cart__summary-body-input">
                        <div class="cart__summary-body-input-wrapper">
                            <input type="radio" value="premium-shipping" class="cart__summary-body-input-btn"
                                name="shipping" id="premiumShipping">
                            <label for="premiumShipping" class="cart__summary-body-input-text">
                                Premium Shipping
                            </label>
                        </div>
                        <p class="cart__summary-body-input-price">£118.80</p>
                    </div>
                    <div class="cart__summary-body-total-wrapper">
                        <p class="cart__summary-body-total">Total</p>
                        <p class="cart__summary-body-total-value">£5,000.00</p>
                    </div>
                    <button class="cart__summary-body-button">Proceed To Checkout</button>
                    <p class="cart__summary-body-discount-text">
                        Discount prices will be active after entering the checkout process
                    </p>
                </div>
            </div>
        </form>
        `
    }
}

customElements.define('mrd-cart-summary-adapt', CartSummaryAdapt);