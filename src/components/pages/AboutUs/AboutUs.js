import { Component } from "../../../core/Component/Component";

export class AboutUs extends Component {
    render() {
        return `
        <div class="about-page__wrapper">
            <div class="container">
                <h1 class="about-page__h1">About Us</h1>
            </div>
        </div>
        `
    }
}

customElements.define('about-us-page', AboutUs);