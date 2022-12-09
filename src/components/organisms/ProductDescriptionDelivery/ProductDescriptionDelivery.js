import { Component } from "../../../core/Component/Component";

export class ProductDescriptionDelivery extends Component {

    static get observedAttributes() {
        return ['name'];
    } 

    render() {
        return `
        
        <div class="product-main__product-section-options-delivery">
            <div class="product-main__product-section-options-delivery-free">
                <object data="../../assets/images/icons/delivery-truck-icon.svg"
                    class="product-main__product-section-options-delivery-free-icon"></object>
                <div class="product-main__product-section-options-delivery-free-text-wrapper">
                    <h5 class="product-main__product-section-options-delivery-free-heading">
                        Free UK Delivery
                    </h5>
                    <p class="product-main__product-section-options-delivery-free-text">
                        Order now and enjoy free delivery on us! Restrictions apply.
                    </p>
                </div>
            </div>
            <mrd-delivery-description name="${this.props.name}"></mrd-delivery-description>
        </div>
        `
    }
}

customElements.define('mrd-product-delivery', ProductDescriptionDelivery);