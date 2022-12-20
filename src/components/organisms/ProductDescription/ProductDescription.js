import { Component } from "../../../core/Component/Component";

export class ProductDescription extends Component {

    static get observedAttributes() {
        return [
            "title",
            "price",
            "discount",
            "delivery",
            "dimensions",
            "finance",
            "includes",
        ];
    }

    render() {

        return `
        
        <div class="product-main__product-section-options">
            <mrd-product-description-heading
                title="${this.props.title}"
                price="${this.props.price}"
                discount="${this.props.discount}"
            >
            </mrd-product-description-heading>

            <mrd-product-rating></mrd-product-rating>
            <mrd-product-colors></mrd-product-colors>
            <mrd-button-add-to-cart></mrd-button-add-to-cart>
            <mrd-product-paying></mrd-product-paying>
            <mrd-product-delivery></mrd-product-delivery>

            <mrd-delivery-description
                delivery="${this.props.delivery}"
                dimensions="${this.props.dimensions}"
                finance="${this.props.finance}"
                includes="${this.props.includes}"
            >
            </mrd-delivery-description>
        </div>
        `
    }
}

customElements.define('mrd-product-description', ProductDescription);