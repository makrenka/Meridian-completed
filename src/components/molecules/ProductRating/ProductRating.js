import { Component } from "../../../core/Component/Component";

export class ProductRating extends Component {

    static get observedAttributes() {
        return ["grade"];
    }

    render() {
        return `
        
        <div class="product-main__product-section-options-rating">
            <div class="stars-${this.props.grade} stars-grey"></div>
        </div>
        `
    }
}

customElements.define('mrd-product-rating', ProductRating);