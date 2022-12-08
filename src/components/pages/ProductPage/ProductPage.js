import { Component } from "../../../core/Component/Component";

export class ProductPage extends Component {

    render() {
        return `
        
        <mrd-header></mrd-header>
        <mrd-breadcrump></mrd-breadcrump>
        <mrd-product-page-product-section></mrd-product-page-product-section>
        `
    }
}

customElements.define('mrd-product-page', ProductPage);