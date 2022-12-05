import { Component } from "../../../core/Component/Component";

export class HeaderAdBar extends Component {
    render() {
        return `
        <div class="header__ad-bar">
            <div class="container">
                <p class="header__ad-bar-text">
                    spring seaSon sale | 20% off entire store | Free Premium UK Delivery
                </p>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-hederadbar', HeaderAdBar);