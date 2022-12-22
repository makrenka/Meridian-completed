import { Component } from "../../../core/Component/Component";
import { databaseService } from "../../../services/Database";

export class ProductPageReviewSlide2 extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            comments: [],
        }
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        })
    }

    getComments() {
        this.toggleIsLoading();
        databaseService.read("comments")
            .then((data) => {
                this.setState((state) => {
                    return {
                        ...state,
                        comments: data,
                    }
                });

            })
            .finally(() => {
                this.toggleIsLoading();
            })
    }

    static get observedAttributes() {
        return ["title"];
    }

    componentDidMount() {
        this.getComments();
    }

    componentWillUnmount() {
        this.getComments();
    }

    render() {
        return `
        <mrd-preloader is-loading="${this.state.isLoading}">
            ${this.state.comments
                .filter(item => item.product == this.props.title)
                .slice(10, 20)
                .map(({ name, description, date }) => `
            <div class="product-main__reviews-review-wrapper">
                <div class="product-main__reviews-review">
                    <div class="product-main__reviews-review-author">
                        <h6 class="product-main__reviews-review-author-heading">${name}</h6>
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
                            ${description}
                        </p>
                    </div>
                    <p class="product-main__reviews-review-date">${date}</p>
                </div>
            
                <div class="product-main__reviews-review-description-adapt">
                    <p class="product-main__reviews-review-description-text">
                        ${description}
                    </p>
                </div>
            </div>
            `).join(' ')}        
        </mrd-preloader>
        `
    }
}

customElements.define('mtd-pp-review-slide2', ProductPageReviewSlide2);