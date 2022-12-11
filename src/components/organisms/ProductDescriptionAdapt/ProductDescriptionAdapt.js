import { Component } from "../../../core/Component/Component";

export class ProductDescriptionAdapt extends Component {
    
    render() {
        return `
        
        <div class="product-main__product-section-options-adapt">
            <mrd-product-description-heading></mrd-product-description-heading>
            <mrd-product-rating></mrd-product-rating>
            <mrd-finance-available-adaptive></mrd-finance-available-adaptive>
            <mrd-button-add-to-cart></mrd-button-add-to-cart>
            <mrd-product-paying></mrd-product-paying>
            <mrd-product-delivery name="-adapt"></mrd-product-delivery>

        </div>
        `
    }
}
 
customElements.define('mrd-product-description-adapt', ProductDescriptionAdapt);