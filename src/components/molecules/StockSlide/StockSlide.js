import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";

export class StockSlide extends Component {

    static get observedAttributes() {
        return ["title", "image", "price", "id"];
    }

    render() {
        return `
        <mrd-link to="${appRoutes.productDetails}/${this.props.id}" class="homepage-main__in-stock-slide-img-link">
            <div class="homepage-main__in-stock-slide-img-wrapper">
                <img src="${this.props.image}.jpg" alt="${this.props.title}"
                class="homepage-main__in-stock-slide-img">
            </div>
            <div class="homepage-main__in-stock-slide-description-wrapper">
                <h4 class="homepage-main__in-stock-slide-title">${this.props.title}</h4>
                <p class="homepage-main__in-stock-slide-price">£${this.props.price}</p>
                <button class="homepage-main__in-stock-slide-btn" type="submit">
                    View Details Products
                </button>
            </div>
        </mrd-link>
        `
    }
}

customElements.define('mrd-stock-slide', StockSlide);