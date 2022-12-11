import { Component } from "../../../core/Component/Component";

export class ProductPageReviewSlide extends Component {
    constructor() {
        super();
        this.state = {
            properties: [
                {
                    userName: 'Darrell Steward',
                    heading: 'I Like This Product!',
                    text: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                        minus id quod me placeat facere possimus, omnis voluptas assumenda.`,
                    date: 'February 1st, 2022',
                },
                {
                    userName: 'Darrell Steward',
                    heading: 'I Like This Product!',
                    text: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                        minus id quod me placeat facere possimus, omnis voluptas assumenda.`,
                    date: 'February 1st, 2022',
                },
            ],
        }
    }

    render() {
        return `
        ${this.state.properties.map(({ userName, heading, text, date }) => 
        `
        <div class="product-main__reviews-review-wrapper">
            <div class="product-main__reviews-review">
                <div class="product-main__reviews-review-author">
                    <h6 class="product-main__reviews-review-author-heading">${userName}</h6>
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
                    <h6 class="product-main__reviews-review-description-heading">
                        ${heading}
                    </h6>
                    <p class="product-main__reviews-review-description-text">
                        ${text}
                    </p>
                </div>
                <p class="product-main__reviews-review-date">${date}</p>
            </div>
        
            <div class="product-main__reviews-review-description-adapt">
                <h6 class="product-main__reviews-review-description-heading">
                    ${heading}
                </h6>
                <p class="product-main__reviews-review-description-text">
                    ${text}
                </p>
            </div>
        </div>
        `).join(' ')}
        
        `
    }
}

customElements.define('mtd-pp-review-slide', ProductPageReviewSlide);