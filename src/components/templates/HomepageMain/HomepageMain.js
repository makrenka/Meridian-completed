import { Component } from "../../../core/Component/Component";

export class HomepageMain extends Component {


    render() {
        return `
        
        <mrd-main-picture></mrd-main-picture>
        <mrd-product-section></mrd-product-section>
        <mrd-home-properties></mrd-home-properties>
        <mrd-stock-slider></mrd-stock-slider>
        `
    }
}

customElements.define('mrd-home-main', HomepageMain);