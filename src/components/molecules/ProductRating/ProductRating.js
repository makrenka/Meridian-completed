import { Component } from "../../../core/Component/Component";

export class ProductRating extends Component {

    render() {
        return `
        
        <div class="product-main__product-section-options-rating">
            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                class="product-main__product-section-options-rating-img">
            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                class="product-main__product-section-options-rating-img">
            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                class="product-main__product-section-options-rating-img">
            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                class="product-main__product-section-options-rating-img">
            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                class="product-main__product-section-options-rating-img">
            <p class="product-main__product-section-options-rating-text">5.00 (200 customer review)
            </p>
        </div>
        `
    }
}

customElements.define('mrd-product-rating', ProductRating);