import { Component } from "../../../core/Component/Component";

export class HomepageMain extends Component {


    render() {
        return `
        
        <mrd-main-picture></mrd-main-picture>
        <mrd-product-section></mrd-product-section>
        <mrd-home-properties></mrd-home-properties>
        <mrd-stock-slider></mrd-stock-slider>
        <mrd-euro-manuf></mrd-euro-manuf>
        <mrd-product-section2></mrd-product-section2>
        <mrd-comment-slider></mrd-comment-slider>
        `
    }
}

customElements.define('mrd-home-main', HomepageMain);