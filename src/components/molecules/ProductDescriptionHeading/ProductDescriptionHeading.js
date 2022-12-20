import { Component } from "../../../core/Component/Component";

export class ProductDescriptionHeading extends Component {

    static get observedAttributes() {
        return ["title", "price", "discount"];
    }

    render() {
        const isAddClassName = this.props.discount == "" ? "" : "-active";

        return `
        
        <h3 class="product-main__product-section-options-heading">${this.props.title}</h3>
        <div class="product-main__product-section-options-text-wrapper">
            <p class="product-main__product-section-options-new-price${isAddClassName}">£${this.props.price * (1 - this.props.discount / 100)}</p>
            <p class="product-main__product-section-options-price${isAddClassName}">£${this.props.price}</p>
            <p class="product-main__product-section-options-discount${isAddClassName}">${this.props.discount}% Off</p>
        </div>
        `
    }
}

customElements.define('mrd-product-description-heading', ProductDescriptionHeading);