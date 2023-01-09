import { Component } from "../../../core/Component/Component";

export class ProductDescriptionAdapt extends Component {

    static get observedAttributes() {
        return [
            "title",
            "price",
            "discount",
            "delivery",
            "dimensions",
            "finance",
            "includes",
            "id",
        ];
    }

    render() {
        return `
        
        <div class="product-main__product-section-options-adapt">
            <mrd-product-description-heading
                title="${this.props.title}"
                price="${this.props.price}"
                discount="${this.props.discount}"
            >
            </mrd-product-description-heading>

            <mrd-product-rating></mrd-product-rating>
            <mrd-finance-available-adaptive></mrd-finance-available-adaptive>

            <mrd-button-add-to-cart
                id="${this.props.id}"
            >
            </mrd-button-add-to-cart>

            <mrd-product-paying></mrd-product-paying>

            <mrd-delivery-description
                name="-adapt"
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

customElements.define('mrd-product-description-adapt', ProductDescriptionAdapt);