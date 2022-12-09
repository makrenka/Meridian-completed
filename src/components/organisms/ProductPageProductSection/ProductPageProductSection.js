import { Component } from "../../../core/Component/Component";

export class ProductPageProductSection extends Component {

    render() {
        return `
        
        <section class="product-main__product-section">
            <div class="product-main__product-section-slider-wrapper-adapt">
                <mrd-product-page-product-slider-adapt></mrd-product-page-product-slider-adapt>
            </div>
            <div class="container">
                <div class="product-main__product-section-wrapper">
                    <mrd-product-page-product-slider></mrd-product-page-product-slider>
                    <mrd-product-description></mrd-product-description>
                </div>
                <mrd-product-description-adapt></mrd-product-description-adapt>
            </div>
        </section>
        `
    }
}

customElements.define('mrd-product-page-product-section', ProductPageProductSection);