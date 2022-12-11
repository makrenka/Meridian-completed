import { Component } from "../../../core/Component/Component";

export class ProductDescription extends Component {

    render() {
        return `
        
        <div class="product-main__product-section-options">
            <mrd-product-description-heading></mrd-product-description-heading>
            <mrd-product-rating></mrd-product-rating>
            <mrd-product-colors></mrd-product-colors>
            <mrd-button-add-to-cart></mrd-button-add-to-cart>
            <mrd-product-paying></mrd-product-paying>
            <mrd-product-delivery></mrd-product-delivery>
        </div>
        `
    }
}
 
customElements.define('mrd-product-description', ProductDescription);