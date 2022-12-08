import { Component } from "../../../core/Component/Component";

export class ButtonAddToCart extends Component {

    render() {
        return `
        
        <form class="product-main__product-section-options-form">
            <button class="product-main__product-section-options-form-btn">Add To Cart</button>
        </form>
        `
    }
}

customElements.define('mrd-button-add-to-cart', ButtonAddToCart);