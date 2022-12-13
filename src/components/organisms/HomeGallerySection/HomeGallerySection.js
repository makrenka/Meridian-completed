import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";

export class HomeGallerySection extends Component {

    render() {
        return `
        <section class="homepage-main__gallery-section">
            <div class="container homepage-main__gallery-section-container">
                <h2 class="homepage-main__gallery-section-heading">Get Inspired & Find Us on Instagram</h2>
            </div>
            <div class="homepage-main__gallery-section-gallery">
                <div class="homepage-main__gallery-section-gallery-img-wrapper">
                    <img src="../../assets/images/gallery/gallery-img1.jpg" alt="gallery-img"
                        class="homepage-main__gallery-section-gallery-img">
                    <mrd-link to="${appRoutes.productDetails}">
                        <button class="homepage-main__gallery-section-gallery-btn">View Product</button>
                    </mrd-link>
                </div>
                <img src="../../assets/images/gallery/gallery-img2.jpg" alt="gallery-img"
                    class="homepage-main__gallery-section-gallery-img">
                <img src="../../assets/images/gallery/gallery-img3.jpg" alt="gallery-img"
                    class="homepage-main__gallery-section-gallery-img">
                <img src="../../assets/images/gallery/gallery-img4.jpg" alt="gallery-img"
                    class="homepage-main__gallery-section-gallery-img">
            </div>
        </section>
        `
    }
}

customElements.define('mrd-home-gallery', HomeGallerySection);