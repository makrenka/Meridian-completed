import { Component } from "../../../core/Component/Component";

export class ProductPageMain extends Component {

    render() {
        return `
        
        <mrd-breadcrump></mrd-breadcrump>
        <mrd-product-page-product-section></mrd-product-page-product-section>
        `
    }
}

customElements.define('mrd-product-page-main', ProductPageMain);