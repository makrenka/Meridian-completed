import { Component } from "../../../core/Component/Component";

export class Cart extends Component {
    render() {
        return `
        <div class="cart-page__wrapper">
            <div class="container">
                <h1 class="cart-page__h1">Cart</h1>
            </div>
        </div>
        `
    }
}

customElements.define('cart-page', Cart);