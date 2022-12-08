import { Component } from "../../../core/Component/Component";

export class ProductPage extends Component {

    render() {
        return `
        
        <mrd-header></mrd-header>
        <mrd-product-page-main></mrd-product-page-main>
        `
    }
}

customElements.define('mrd-product-page', ProductPage);