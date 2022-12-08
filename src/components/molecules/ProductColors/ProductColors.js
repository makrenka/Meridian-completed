import { Component } from "../../../core/Component/Component";

export class ProductColors extends Component {

    render() {
        return `
        
        <div class="product-main__product-section-options-colors">
            <p class="product-main__product-section-options-colors-text">Colors:</p>
            <div class="product-main__product-section-options-colors-circles">
                <img src="../../assets/images/product-colors/ellipse-black.svg" alt="black-color"
                    class="product-main__product-section-options-colors-circles-img">
                <img src="../../assets/images/product-colors/ellipse-pink.svg" alt="pink-color"
                    class="product-main__product-section-options-colors-circles-img">
                <img src="../../assets/images/product-colors/ellipse-grey.svg" alt="grey-color"
                    class="product-main__product-section-options-colors-circles-img">
                <img src="../../assets/images/product-colors/ellipse-green.svg" alt="green-color"
                    class="product-main__product-section-options-colors-circles-img">
                <img src="../../assets/images/product-colors/ellipse-red.svg" alt="red-color"
                    class="product-main__product-section-options-colors-circles-img">
            </div>
        </div>
        `
    }
}

customElements.define('mrd-product-colors', ProductColors);