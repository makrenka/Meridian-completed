import { Component } from "../../../core/Component/Component";

export class StockSlide extends Component {

    static get observedAttributes() {
        return ["title", "poster", "price"];
      }

    render() {
        return `
        <div class="homepage-main__in-stock-slide-img-wrapper">
            <a href="./product.html" class="homepage-main__in-stock-slide-img-link">
                <img src="../../assets/images/ready-to-ship-pictures/${this.props.poster}.jpg" alt="${this.props.poster}"
                class="homepage-main__in-stock-slide-img">
            </a>                                
        </div>
        <div class="homepage-main__in-stock-slide-description-wrapper">
            <a href="./product.html" class="homepage-main__in-stock-slide-title-link">
                <h4 class="homepage-main__in-stock-slide-title">${this.props.title}</h4>
            </a>                                
            <p class="homepage-main__in-stock-slide-price">${this.props.price}</p>
            <form action="./product.html">
                <button class="homepage-main__in-stock-slide-btn" type="submit">
                    View Details Products
                </button>
            </form>                                
        </div>
        `
    }
}

customElements.define('mrd-stock-slide', StockSlide);