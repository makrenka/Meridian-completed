import { Component } from "../../../core/Component/Component";

export class ProductPageProductSection extends Component {

    static get observedAttributes() {
        return ["image1", "image2", "image3", "image4", "image5"];
    }

    render() {
        return `
        
        <section class="product-main__product-section">
            <div class="product-main__product-section-slider-wrapper-adapt">
                <mrd-product-page-product-slider-adapt></mrd-product-page-product-slider-adapt>
            </div>
            <div class="container">
                <div class="product-main__product-section-wrapper">
                    <mrd-product-page-product-slider 
                        image1="${this.props.image1}"
                        image2="${this.props.image2}"
                        image3="${this.props.image3}"
                        image4="${this.props.image4}"
                        image5="${this.props.image5}"
                    >
                    </mrd-product-page-product-slider>
                    <mrd-product-description></mrd-product-description>
                </div>
                <mrd-product-description-adapt></mrd-product-description-adapt>
            </div>
        </section>
        `
    }
}

customElements.define('mrd-product-page-product-section', ProductPageProductSection);