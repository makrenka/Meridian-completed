import { Component } from "../../../core/Component/Component";
import Swiper, { Pagination } from 'swiper';

export class ProductPageProductSliderAdapt extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
        }
    }

    static get observedAttributes() {
        return ["image1", "image2", "image3", "image4", "image5"];
    }

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
        <mrd-preloader is-loading="${this.state.isLoading}">
            <div class="swiper product-main__product-section-slider-adapt">
                <div class="swiper-wrapper">
                    <div class="swiper-slide product-main__product-section-slide">
                        <img src="${this.props.image1}" alt="product-photo"
                            class="product-main__product-section-slide-photo">
                    </div>
                    <div class="swiper-slide product-main__product-section-slide">
                        <img src="${this.props.image2}" alt="product-photo"
                            class="product-main__product-section-slide-photo">
                    </div>
                    <div class="swiper-slide product-main__product-section-slide">
                        <img src="${this.props.image3}" alt="product-photo"
                            class="product-main__product-section-slide-photo">
                    </div>
                    <div class="swiper-slide product-main__product-section-slide">
                        <img src="${this.props.image4}" alt="product-photo"
                            class="product-main__product-section-slide-photo">
                    </div>
                    <div class="swiper-slide product-main__product-section-slide">
                        <img src="${this.props.image5}" alt="product-photo"
                            class="product-main__product-section-slide-photo">
                    </div>
                </div>
                <div class="swiper-pagination product-section-slider-pagination"></div>
            </div>
        </mrd-preloader>
        `
    }
}

customElements.define('mrd-product-page-product-slider-adapt', ProductPageProductSliderAdapt);