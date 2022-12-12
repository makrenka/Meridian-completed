import { Component } from "../../../core/Component/Component";

export class Footer extends Component {

    render() {
        return `
        
        <mrd-footer-top></mrd-footer-top>
        <mrd-footer-bottom></mrd-footer-bottom>
        `
    }
}

customElements.define('mrd-footer', Footer);