import { Component } from "../../../core/Component/Component";

export class Contact extends Component {
    render() {
        return `
        <h1>Contact</h1>
        `
    }
}

customElements.define('contact-page', Contact);