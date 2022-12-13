import { Component } from "../../../core/Component/Component";

export class AboutUs extends Component {
    render() {
        return `
        <h1>AboutUs</h1>
        `
    }
}

customElements.define('about-us-page', AboutUs);