import { Component } from "../../../core/Component/Component";
import Swiper, { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { appRoutes } from "../../../constants/appRoutes";

export class ProductPageReviewSection extends Component {
    constructor() {
        super();
        this.state = {
            slide: [
                {
                    id: '1',
                },
                {
                    id: '2',
                },
            ]
        }

    }

    initSwiper() {
        let swiper = new Swiper(".product-main__reviews-slider", {
            slidesPerView: 1,

            modules: [Navigation, Pagination],

            pagination: {
                el: ".reviews-slider-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            navigation: {
                nextEl: ".reviews-slider-btn-next",
                prevEl: ".reviews-slider-btn-prev",
            },
        });

        return swiper;
    }

    static get observedAttributes() {
        return ["id", "title"];
    }

    openCommentForm = (evt) => {
        const target = evt.target.closest('.product-main__reviews-btn');
        const comment = document.querySelector('.comment-form');
        const overlay = document.querySelector('.overlay');
        if (target) {
            comment.classList.add('comment-form--active');
            overlay.classList.add('overlay--active');
        }
    }

    closeCommentForm = (evt) => {
        const target1 = evt.target.closest('.comment-page__close-icon');
        const target2 = evt.target.closest('.comment-page__btn');
        const comment = document.querySelector('.comment-form');
        const overlay = document.querySelector('.overlay');
        if (target1 || target2) {
            comment.classList.remove('comment-form--active');
            overlay.classList.remove('overlay--active');
        }
    }

    componentDidMount() {
        this.initSwiper();
        this.addEventListener('click', this.openCommentForm);
        this.addEventListener('click', this.closeCommentForm);
    }

    componentWillUnmount() {
        this.initSwiper();
        this.removeEventListener('click', this.openCommentForm);
        this.removeEventListener('click', this.closeCommentForm);
    }

    render() {
        return `
        
        <section class="product-main__reviews">
            <div class="container">
                <div class="product-main__reviews-heading-wrapper">
                    <h3 class="product-main__reviews-heading">Reviews (168)</h3>
                    <button class="product-main__reviews-btn">Write A Review</button>                        
                    <comment-form class="comment-form" 
                        id="${this.props.id}"
                        title="${this.props.title}"
                    >
                    </comment-form>
                </div>
    
                <div class="swiper product-main__reviews-slider">
                    <div class="swiper-wrapper product-main__reviews-slider-wrapper">
                        ${this.state.slide.map(({ id }) =>
            `
                            <div class="swiper-slide product-main__reviews-slider-slide" slide-id="${id}">
                                <mtd-pp-review-slide></mtd-pp-review-slide>
                            </div>
                            `
        ).join(' ')}
                    </div>
                    <div class="swiper-pagination reviews-slider-pagination"></div>
    
                    <div class="swiper-button-prev reviews-slider-btn-prev">
                        <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M35.1793 41.4524C35.0039 41.2772 34.9052 41.0396 34.905 40.7917V40.318C34.9079 40.0707 35.0061 39.834 35.1793 39.6573L41.5868 33.2623C41.7038 33.1443 41.8631 33.0779 42.0293 33.0779C42.1955 33.0779 42.3548 33.1443 42.4719 33.2623L43.357 34.1473C43.4742 34.2622 43.5403 34.4195 43.5403 34.5836C43.5403 34.7478 43.4742 34.9051 43.357 35.02L37.8096 40.5549L43.357 46.0898C43.475 46.2068 43.5413 46.3661 43.5413 46.5323C43.5413 46.6985 43.475 46.8578 43.357 46.9748L42.4719 47.8475C42.3548 47.9655 42.1955 48.0318 42.0293 48.0318C41.8631 48.0318 41.7038 47.9655 41.5868 47.8475L35.1793 41.4524Z"
                                fill="#BCBCBC" />
                            <rect x="0.5" y="1.16382" width="78.7823" height="78.7823" rx="5.5" stroke="#545454" />
                        </svg>
                    </div>
                    <div class="swiper-button-next reviews-slider-btn-next">
                        <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M44.9504 41.4524C45.1257 41.2772 45.2244 41.0396 45.2246 40.7917V40.318C45.2217 40.0707 45.1235 39.834 44.9504 39.6573L38.5428 33.2623C38.4258 33.1443 38.2665 33.0779 38.1003 33.0779C37.9341 33.0779 37.7748 33.1443 37.6578 33.2623L36.7727 34.1473C36.6554 34.2622 36.5893 34.4195 36.5893 34.5836C36.5893 34.7478 36.6554 34.9051 36.7727 35.02L42.32 40.5549L36.7727 46.0898C36.6547 46.2068 36.5883 46.3661 36.5883 46.5323C36.5883 46.6985 36.6547 46.8578 36.7727 46.9748L37.6578 47.8475C37.7748 47.9655 37.9341 48.0318 38.1003 48.0318C38.2665 48.0318 38.4258 47.9655 38.5428 47.8475L44.9504 41.4524Z"
                                fill="#BCBCBC" />
                            <rect x="0.846924" y="1.16382" width="78.7823" height="78.7823" rx="5.5" stroke="#545454" />
                        </svg>
                    </div>
                </div>
            </div>

        </section>

        <mrd-overlay></mrd-overlay>
        `
    }
}

customElements.define('mrd-pp-review-section', ProductPageReviewSection);