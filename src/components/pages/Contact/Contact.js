import { Component } from "../../../core/Component/Component";

export class Contact extends Component {
    render() {
        return `
        <div class="contact-page__wrapper">
            <div class="container">
                <h1 class="contact-page__h1">Contact</h1>
            </div>
        </div>
        `
    }
}

customElements.define('contact-page', Contact);