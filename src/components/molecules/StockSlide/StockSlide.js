import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";

export class StockSlide extends Component {

    static get observedAttributes() {
        return ["title", "image", "price", "id"];
    }

    render() {
        return `
        <div class="homepage-main__in-stock-slide-img-wrapper">
            <mrd-link to="${appRoutes.productDetails}/${this.props.id}" class="homepage-main__in-stock-slide-img-link">            
                <img src="${this.props.image}.jpg" alt="${this.props.title}"
                class="homepage-main__in-stock-slide-img">
            </mrd-link>                                
        </div>
        <div class="homepage-main__in-stock-slide-description-wrapper">
            <mrd-link to="${appRoutes.productDetails}" class="homepage-main__in-stock-slide-title-link">            
                <h4 class="homepage-main__in-stock-slide-title">${this.props.title}</h4>
            </mrd-link>                                
            <p class="homepage-main__in-stock-slide-price">£${this.props.price}</p>
            <mrd-link to="${appRoutes.productDetails}">
                <button class="homepage-main__in-stock-slide-btn" type="submit">
                    View Details Products
                </button>
            </mrd-link>                                
        </div>
        `
    }
}

customElements.define('mrd-stock-slide', StockSlide);