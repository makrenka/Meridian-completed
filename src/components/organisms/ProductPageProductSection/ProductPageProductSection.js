import { Component } from "../../../core/Component/Component";

export class ProductPageProductSection extends Component {

    render() {
        return `
        
        <section class="product-main__product-section">

            <div class="container">
                <div class="product-main__product-section-wrapper">
                    <mrd-product-page-product-slider></mrd-product-page-product-slider>
                </div>
            </div>

        </section>
        `
    }
}

customElements.define('mrd-product-page-product-section', ProductPageProductSection);