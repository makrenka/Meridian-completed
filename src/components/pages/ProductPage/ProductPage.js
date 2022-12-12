import { Component } from "../../../core/Component/Component";

export class ProductPage extends Component {

    render() {
        return `
        <mrd-product-page-main></mrd-product-page-main>
        `
    }
}

customElements.define('product-page', ProductPage);