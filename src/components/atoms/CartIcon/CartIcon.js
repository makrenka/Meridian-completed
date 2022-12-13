import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";

export class CartIcon extends Component {

    render() {
        return `
        <mrd-link to="${appRoutes.cart}">
        <div class="header__main-bar-icons-cart">
            <img src="../../assets/images/icons/cart.svg" alt="cart-icon" class="header__main-bar-icons-cart-img">
            <div class="header__main-bar-icons-cart-counter">
                <span class="header__main-bar-icons-cart-counter-text">0</span>
            </div>
        </div>
        </mrd-link>
        `
    }
}

customElements.define('mrd-cart-icon', CartIcon);