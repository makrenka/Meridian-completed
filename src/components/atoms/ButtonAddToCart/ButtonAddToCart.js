import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";
import localStorageService from "../../../services/LocalStorageService";
import { STORAGE_KEYS } from '../../../constants/localStorage';

export class ButtonAddToCart extends Component {
    constructor() {
        super();
        this.data = this.props.data;
    }

    onClick(evt) {
        if (evt.target.closest('.product-main__product-section-options-form-btn')) {
            const data = localStorageService.getItem(STORAGE_KEYS.cartData) ?? [];
            localStorageService.setItem(STORAGE_KEYS.cartData, [...data, this.data]);
        }
    }

    render() {

        return `
        <mrd-link to="${appRoutes.cart}">
            <form class="product-main__product-section-options-form">
                <button class="product-main__product-section-options-form-btn">Add To Cart</button>
            </form>
        </mrd-link>
        `
    }
}

customElements.define('mrd-button-add-to-cart', ButtonAddToCart);