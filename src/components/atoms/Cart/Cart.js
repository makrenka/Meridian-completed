import { Component } from "../../../core/Component/Component";

export class Cart extends Component {

    render() {
        return `
        
        <div class="header__main-bar-icons-cart">
            <img src="../../assets/images/icons/cart.svg" alt="cart-icon" class="header__main-bar-icons-cart-img">
            <div class="header__main-bar-icons-cart-counter">
                <span class="header__main-bar-icons-cart-counter-text">0</span>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-cart', Cart);