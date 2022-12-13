import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";

export class MainPictureSection extends Component {


    render() {
        return `
        
        <div class="homepage-main__picture-section">
            <div class="container">
                <div class="homepage-main__picture-section-inner-wrapper">
                    <h1 class="homepage-main__picture-section-heading">MODERN, CONTEMPORARY OUTDOOR FURNITURE</h1>
                    <p class="homepage-main__picture-section-text">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Semper eget ultrices gravida gravida. Suspendisse pharetra quis eros facilisi.</p>
                    <mrd-link to="${appRoutes.products}">
                        <button class="homepage-main__picture-section-button">Shop Collections</button>
                    </mrd-link>
                        
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-main-picture', MainPictureSection);