import { Component } from "../../../core/Component/Component";

export class ProductPageProductSection extends Component {

    static get observedAttributes() {
        return [
            "image1",
            "image2",
            "image3",
            "image4",
            "image5",
            "title",
            "price",
            "discount",
            "delivery",
            "dimensions",
            "finance",
            "includes",
            "data",
        ];
    }

    render() {
        console.log(this.props.data)
        return `
        
        <section class="product-main__product-section">
            <div class="product-main__product-section-slider-wrapper-adapt">
                <mrd-product-page-product-slider-adapt
                    image1="${this.props.image1}"
                    image2="${this.props.image2}"
                    image3="${this.props.image3}"
                    image4="${this.props.image4}"
                    image5="${this.props.image5}"
                >
                </mrd-product-page-product-slider-adapt>
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

                    <mrd-product-description
                        title="${this.props.title}"
                        price="${this.props.price}"
                        discount="${this.props.discount}"
                        delivery="${this.props.delivery}"
                        dimensions="${this.props.dimensions}"
                        finance="${this.props.finance}"
                        includes="${this.props.includes}"
                    >
                    </mrd-product-description>
                </div>
                <mrd-product-description-adapt
                    title="${this.props.title}"
                    price="${this.props.price}"
                    discount="${this.props.discount}"
                    delivery="${this.props.delivery}"
                    dimensions="${this.props.dimensions}"
                    finance="${this.props.finance}"
                    includes="${this.props.includes}"
                >
                </mrd-product-description-adapt>
            </div>
        </section>
        `
    }
}

customElements.define('mrd-product-page-product-section', ProductPageProductSection);