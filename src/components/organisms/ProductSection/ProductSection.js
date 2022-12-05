import { Component } from "../../../core/Component/Component";

export class ProductSection extends Component {


    render() {
        return `
        
        <section class="homepage-main__product-section">
            <div class="container">
                <div class="homepage-main__product-section-wrapper">
                    <div class="homepage-main__product-section-card-1">
                        <a href="./product.html" class="homepage-main__product-section-card-link">
                            <img src="../../assets/images/collections/section-1/collection-1-section-1.jpg" alt="collection-1-img"
                                class="homepage-main__product-section-card-img">
                            <h4 class="homepage-main__product-section-card-title-heading">Collection 1</h4>
                        </a>
                    </div>
                    <div class="homepage-main__product-section-card-2">
                        <a href="./product.html" class="homepage-main__product-section-card-link">
                            <img src="../../assets/images/collections/section-1/collection-2-section-1.jpg" alt="collection-2-img"
                                class="homepage-main__product-section-card-img">
                            <h4 class="homepage-main__product-section-card-title-heading">Collection 2</h4>
                        </a>
                    </div>
                    <div class="homepage-main__product-section-card-3">
                        <a href="./product.html" class="homepage-main__product-section-card-link">
                            <img src="../../assets/images/collections/section-1/collection-3-section-1.jpg" alt="collection-3-img"
                                class="homepage-main__product-section-card-img">
                            <h4 class="homepage-main__product-section-card-title-heading">Collection 3</h4>
                        </a>
                    </div>
                    <div class="homepage-main__product-section-card-4">
                        <a href="./product.html" class="homepage-main__product-section-card-link">
                            <img src="../../assets/images/collections/section-1/collection-4-section-1.jpg" alt="collection-4-img"
                                class="homepage-main__product-section-card-img">
                            <h4 class="homepage-main__product-section-card-title-heading">Collection 4</h4>
                        </a>
                    </div>
                    <div class="homepage-main__product-section-card-5">
                        <a href="./product.html" class="homepage-main__product-section-card-link">
                            <img src="../../assets/images/collections/section-1/collection-5-section-1.jpg" alt="collection-5-img"
                                class="homepage-main__product-section-card-img">
                            <h4 class="homepage-main__product-section-card-title-heading">Collection 5</h4>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('mrd-product-section', ProductSection);