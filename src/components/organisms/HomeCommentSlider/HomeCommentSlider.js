import { Component } from "../../../core/Component/Component";
import Swiper, { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { databaseService } from "../../../services/Database";

export class HomeCommentSlider extends Component {
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
                this.initSwiper();
            })
    }

    initSwiper() {
        let swiper = new Swiper(".homepage-main__comment-section-slider", {
            slidesPerView: 1,
            spaceBetween: 25,
            loop: true,

            modules: [Navigation, Pagination],

            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        new Swiper(".homepage-main__comment-section-slider-adapt", {
            slidesPerView: 1,
            spaceBetween: 60,
            loop: true,

            modules: [Navigation, Pagination],

            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        return swiper;
    }

    componentDidMount() {
        this.getComments();
    }

    componentWillUnmount() {
        this.getComments();
    }

    render() {
        const filt = this.state.comments.filter(item => item.grade == 5)
        console.log(filt)
        return `
        <mrd-preloader is-loading="${this.state.isLoading}">
            <section class="homepage-main__comment-section">
                <div class="container homepage-main__comment-section-container">
                    <div class="swiper homepage-main__comment-section-slider">
                        <div class="swiper-wrapper homepage-main__comment-section-slider-wrapper">

                        ${this.state.comments.filter(item => item.grade == 5)
                .map(({ description, grade, name }) => `
                    <div class="swiper-slide homepage-main__comment-section-slide">
                        <div class="homepage-main__comment-section-wrapper">
                            <div class="homepage-main__comment-section-comment">
                                <h2 class="homepage-main__comment-section-comment-heading">FURNITURE TO WRITE HOME
                                    ABOUT</h2>
                                <img src="../../assets/images/homepage-comment-picture-adapt.jpg" alt="comment-picture"
                                    class="homepage-main__comment-section-slide-img-adaptive">
                                <p class="homepage-main__comment-section-comment-text">
                                    ${description}
                                </p>
                                <div class="homepage-main__comment-section-comment-author">
                                    <div class="homepage-main__comment-section-comment-author-rating">
                                        <mrd-product-rating
                                            grade="${grade}"
                                        >
                                        </mrd-product-rating>
                                    </div>
                                    <p class="homepage-main__comment-section-comment-author-name">${name}</p>
                                </div>
                            </div>
                            <img src="../../assets/images/homepage-comment-picture.jpg" alt="comment-picture"
                                class="homepage-main__comment-section-slide-img">
                        </div>
                    </div>
                `).join(' ')}

                        </div>
                        <div class="swiper-pagination homepage-main__comment-section-slider-pagination"></div>
                        <div class="swiper-button-prev homepage-main__comment-section-slider-button-prev">
                            <img src="../../assets/images/icons/left-slider-arrow.svg" alt="left-slider-arrow"
                                class="homepage-main__comment-section-slider-button-prev-img">
                        </div>
                        <div class="swiper-button-next homepage-main__comment-section-slider-button-next">
                            <img src="../../assets/images/icons/right-slider-arrow.svg" alt="right-slider-arrow"
                                class="homepage-main__comment-section-slider-button-next-img">
                        </div>
                    </div>
                </div>

                <div class="swiper homepage-main__comment-section-slider-adapt">
                    <div class="swiper-wrapper homepage-main__comment-section-slider-wrapper">

                    ${this.state.comments.filter(item => item.grade == 5)
                .map(({ description, grade, name }) => `
                    <div class="swiper-slide homepage-main__comment-section-slide">
                        <div class="homepage-main__comment-section-wrapper">
                            <div class="homepage-main__comment-section-comment">
                                <h2 class="homepage-main__comment-section-comment-heading">FURNITURE TO WRITE HOME
                                    ABOUT</h2>
                                <img src="../../assets/images/homepage-comment-picture-adapt.jpg" alt="comment-picture"
                                    class="homepage-main__comment-section-slide-img-adaptive">
                                <p class="homepage-main__comment-section-comment-text">
                                    ${description}
                                </p>
                                <div class="homepage-main__comment-section-comment-author">
                                    <div class="homepage-main__comment-section-comment-author-rating">
                                        <mrd-product-rating
                                            grade="${grade}"
                                        >
                                        </mrd-product-rating>
                                    </div>
                                    <p class="homepage-main__comment-section-comment-author-name">${name}</p>
                                </div>
                            </div>
                            <img src="../../assets/images/homepage-comment-picture.jpg" alt="comment-picture"
                                class="homepage-main__comment-section-slide-img">
                        </div>
                    </div>
                    `).join(' ')}
                        
                    </div>
                    <div class="swiper-pagination homepage-main__comment-section-slider-pagination"></div>
                    <div class="swiper-button-prev homepage-main__comment-section-slider-button-prev">
                        <img src="../../assets/images/icons/left-slider-arrow.svg" alt="left-slider-arrow"
                            class="homepage-main__comment-section-slider-button-prev-img">
                    </div>
                    <div class="swiper-button-next homepage-main__comment-section-slider-button-next">
                        <img src="../../assets/images/icons/right-slider-arrow.svg" alt="right-slider-arrow"
                            class="homepage-main__comment-section-slider-button-next-img">
                    </div>
                </div>
            </section>
        </mrd-preloader>
        `
    }
}

customElements.define('mrd-comment-slider', HomeCommentSlider);