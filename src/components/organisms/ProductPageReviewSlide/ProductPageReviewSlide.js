import { Component } from "../../../core/Component/Component";

export class ProductPageReviewSlide extends Component {

    static get observedAttributes() {
        return ["name", "description", "date"];
    }

    render() {

        return `
        
            <div class="product-main__reviews-review-wrapper">
                <div class="product-main__reviews-review">
                    <div class="product-main__reviews-review-author">
                        <h6 class="product-main__reviews-review-author-heading">${this.props.name}</h6>
                        <div class="product-main__reviews-review-author-verification">
                            <p class="product-main__reviews-review-author-verification-text">
                                Verified Buy
                            </p>
                            <object data="../../assets/images/icons/verification-icon.svg"
                                class="product-main__reviews-review-author-verification-img"></object>
                        </div>
                        <div class="product-main__reviews-review-author-rating">
                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                class="product-main__reviews-review-author-rating-img">
                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                class="product-main__reviews-review-author-rating-img">
                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                class="product-main__reviews-review-author-rating-img">
                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                class="product-main__reviews-review-author-rating-img">
                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                class="product-main__reviews-review-author-rating-img">
                        </div>
                    </div>
                    <div class="product-main__reviews-review-description">
                        <p class="product-main__reviews-review-description-text">
                            ${this.props.description}
                        </p>
                    </div>
                    <p class="product-main__reviews-review-date">${this.props.date}</p>
                </div>
            
                <div class="product-main__reviews-review-description-adapt">
                    <p class="product-main__reviews-review-description-text">
                        ${this.props.description}
                    </p>
                </div>
            </div>       
        
        `
    }
}

customElements.define('mtd-pp-review-slide', ProductPageReviewSlide);