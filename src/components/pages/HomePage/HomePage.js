import { Component } from "../../../core/Component/Component";

export class HomePage extends Component {

    render() {
        return `
        
            <mrd-header></mrd-header>
            <mrd-home-main></mrd-home-main>
            <mrd-footer></mrd-footer>
        `
    }
}

customElements.define('mrd-home-page', HomePage);