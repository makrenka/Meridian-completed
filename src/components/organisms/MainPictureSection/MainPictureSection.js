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
                    <button class="homepage-main__picture-section-button" type="submit">Shop Collections</button>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-main-picture', MainPictureSection);