import { Component } from "../../../core/Component/Component";

export class HomePage extends Component {

    render() {
        return `
        
            <mrd-home-main></mrd-home-main>
        `
    }
}

customElements.define('home-page', HomePage);