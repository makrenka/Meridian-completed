import { Component } from "../../../core/Component/Component";

export class ProductPageMain extends Component {

    render() {
        return `
        
        <mrd-breadcrump></mrd-breadcrump>
        <mrd-product-page-product-section></mrd-product-page-product-section>
        <mrd-pp-property-section></mrd-pp-property-section>
        <mrd-pp-faq-section></mrd-pp-faq-section>
        <mrd-pp-popular-section></mrd-pp-popular-section>
        `
    }
}

customElements.define('mrd-product-page-main', ProductPageMain);