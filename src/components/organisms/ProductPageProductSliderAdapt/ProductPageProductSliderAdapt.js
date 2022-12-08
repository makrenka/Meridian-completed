import { Component } from "../../../core/Component/Component";

export class ProductPageProductSliderAdapt extends Component {

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