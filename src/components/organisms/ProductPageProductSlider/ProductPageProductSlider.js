import { Component } from "../../../core/Component/Component";
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';

export class ProductPageProductSlider extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
        }
    }


    initSwiper() {
        let swiper = new Swiper(".product-main__product-section-slider", {
            spaceBetween: 10,

            modules: [Navigation, Pagination, Thumbs],

            pagination: {
                el: ".product-section-slider-pagination",
                type: "bullets",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: {
                    el: '.product-main__product-section-slider2',
                    slidesPerView: 5,
                },
            },
        });

        return swiper;
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        })
    }

    componentDidMount() {
        this.initSwiper();
    }

    render() {
        return `
        <mrd-preloader is-loading="${this.state.isLoading}">
            <div class="product-main__product-section-sliders-wrapper">
                <div class="swiper product-main__product-section-slider">
                    <div class="swiper-wrapper">
                    
                        <div class="swiper-slide product-main__product-section-slide">
                            <img src="../../assets/images/product-photos/product-main.jpg" alt="product-photo"
                                class="product-main__product-section-slide-photo">
                        </div>
                        <div class="swiper-slide product-main__product-section-slide">
                            <img src="./../assets/images/product-photos/product-main.jpg" alt="product-photo"
                                class="product-main__product-section-slide-photo">
                        </div>
                        <div class="swiper-slide product-main__product-section-slide">
                            <img src="./../assets/images/product-photos/product-main.jpg" alt="product-photo"
                                class="product-main__product-section-slide-photo">
                        </div>
                        <div class="swiper-slide product-main__product-section-slide">
                            <img src="./../assets/images/product-photos/product-main.jpg" alt="product-photo"
                                class="product-main__product-section-slide-photo">
                        </div>
                        <div class="swiper-slide product-main__product-section-slide">
                            <img src="./../assets/images/product-photos/product-main.jpg" alt="product-photo"
                                class="product-main__product-section-slide-photo">
                        </div>
                    </div>
                    <div class="swiper-pagination product-section-slider-pagination"></div>
                    <div class="swiper-button-prev product-section-slider-btn-prev"></div>
                    <div class="swiper-button-next product-section-slider-btn-next"></div>
                </div>
                <div class="swiper product-main__product-section-slider2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide product-main__product-section-slide2">
                            <img src="./../assets/images/product-photos/product-main.jpg" alt="slide-photo"
                                class="product-main__product-section-slide-photo2">
                        </div>
                        <div class="swiper-slide product-main__product-section-slide2">
                            <img src="./../assets/images/product-photos/product-main.jpg" alt="slide-photo"
                                class="product-main__product-section-slide-photo2">
                        </div>
                        <div class="swiper-slide product-main__product-section-slide2">
                            <img src="./../assets/images/product-photos/product-main.jpg" alt="slide-photo"
                                class="product-main__product-section-slide-photo2">
                        </div>
                        <div class="swiper-slide product-main__product-section-slide2">
                            <img src="./../assets/images/product-photos/product-main.jpg" alt="slide-photo"
                                class="product-main__product-section-slide-photo2">
                        </div>
                        <div class="swiper-slide product-main__product-section-slide2">
                            <img src="./../assets/images/product-photos/product-main.jpg" alt="slide-photo"
                                class="product-main__product-section-slide-photo2">
                        </div>
                    </div>
                </div>
            </div>
        </mrd-preloader>
        `
    }
}

customElements.define('mrd-product-page-product-slider', ProductPageProductSlider);