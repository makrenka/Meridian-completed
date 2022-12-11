import { Component } from "../../../core/Component/Component";

export class ProductPagePropertySection extends Component {

    render() {
        return `
        
        <div class="container">
            <section class="product-main__property">
                <img src="../../assets/images/Product-page-property-picture.jpg" alt="property-picture"
                    class="product-main__property-img">
                <div class="product-main__property-description">
                    <h2 class="product-main__property-description-heading">Cast Aluminium Furniture</h2>
                    <p class="product-main__property-description-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non suspendisse vivamus
                        convallis proin. Molestie pulvinar tortor neque adipiscing mattis diam nibh nunc quis. Nisl sit
                        faucibus amet et pharetra. Vitae quis porta aliquet semper. Pulvinar augue commodo facilisis sit
                        habitant donec. Sed senectus natoque vitae faucibus volutpat cras ac ullamcorper nec. Quam
                        tortor in aliquam iaculis fringilla. Diam feugiat mattis pulvinar congue mattis. Dui felis
                        lacus, porta a facilisi. Nunc aliquam vulputate sem sapien lacus, nisi. Ullamcorper purus ut
                        nisl non malesuada amet. Neque viverra quis dui et. Elit, et fringilla convallis elementum
                        sodales non in.
                        Amet amet, ut nunc quam.
                    </p>
                </div>
            </section>
        </div>
        `
    }
}

customElements.define('mrd-pp-property-section', ProductPagePropertySection);