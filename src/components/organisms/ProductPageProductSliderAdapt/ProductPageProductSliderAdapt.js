import { Component } from "../../../core/Component/Component";
import Swiper, { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';

export class ProductPageProductSliderAdapt extends Component {

    initSwiper() {
        let swiper = new Swiper(".product-main__product-section-slider-adapt", {
            spaceBetween: 10,

            modules: [Pagination],

            pagination: {
                el: ".product-section-slider-pagination",
                type: "bullets",
                clickable: true,
            },

        });

        return swiper;
    }

    componentDidMount() {
        this.initSwiper();
    }

    componentWillUnmount() {
        this.initSwiper();
    }

    render() {
        return `
        
        <div class="swiper product-main__product-section-slider-adapt">
            <div class="swiper-wrapper">
                <div class="swiper-slide product-main__product-section-slide">
                    <img src="../../assets/images/product-photos/product-main.jpg" alt="product-photo"
                        class="product-main__product-section-slide-photo">
                </div>
                <div class="swiper-slide product-main__product-section-slide">
                    <img src="../../assets/images/product-photos/product-main.jpg" alt="product-photo"
                        class="product-main__product-section-slide-photo">
                </div>
                <div class="swiper-slide product-main__product-section-slide">
                    <img src="../../assets/images/product-photos/product-main.jpg" alt="product-photo"
                        class="product-main__product-section-slide-photo">
                </div>
                <div class="swiper-slide product-main__product-section-slide">
                    <img src="../../assets/images/product-photos/product-main.jpg" alt="product-photo"
                        class="product-main__product-section-slide-photo">
                </div>
                <div class="swiper-slide product-main__product-section-slide">
                    <img src="../../assets/images/product-photos/product-main.jpg" alt="product-photo"
                        class="product-main__product-section-slide-photo">
                </div>
            </div>
            <div class="swiper-pagination product-section-slider-pagination"></div>
        </div>
        `
    }
}

customElements.define('mrd-product-page-product-slider-adapt', ProductPageProductSliderAdapt);