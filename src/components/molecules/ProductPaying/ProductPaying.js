import { Component } from "../../../core/Component/Component";

export class ProductPaying extends Component {

    render() {
        return `
        
        <div class="product-main__product-section-options-paying">
            <div class="product-main__product-section-options-paying-text-wrapper">
                <p class="product-main__product-section-options-paying-text">
                    Guaranteed Safe Checkout
                </p>
                <object data="../../assets/images/icons/safe-icon.svg"></object>
            </div>
            <div class="product-main__product-section-options-paying-images">
                <img src="../../assets/images/pays-icons/card.png" alt="card"
                    class="product-main__product-section-options-paying-images-img">
                <img src="../../assets/images/pays-icons/visa.png" alt="visa"
                    class="product-main__product-section-options-paying-images-img">
                <img src="../../assets/images/pays-icons/google-pay.png" alt="google-pay"
                    class="product-main__product-section-options-paying-images-img">
                <img src="../../assets/images/pays-icons/apple-pay.png" alt="apple-pay"
                    class="product-main__product-section-options-paying-images-img">
            </div>
        </div>
        `
    }
}

customElements.define('mrd-product-paying', ProductPaying);