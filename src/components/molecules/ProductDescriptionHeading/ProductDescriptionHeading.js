import { Component } from "../../../core/Component/Component";

export class ProductDescriptionHeading extends Component {

    render() {
        return `
        
        <h3 class="product-main__product-section-options-heading">Alma Velvet Armless</h3>
        <div class="product-main__product-section-options-text-wrapper">
            <p class="product-main__product-section-options-price">£1,500.00</p>
            <p class="product-main__product-section-options-discount">£2,500.00</p>
            <p class="product-main__product-section-options-price">40% Off</p>
        </div>
        `
    }
}

customElements.define('mrd-product-description-heading', ProductDescriptionHeading);