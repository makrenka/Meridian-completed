import { Component } from "../../../core/Component/Component";

export class Products extends Component {
    render() {
        return `
        <div class="products-page__wrapper">
            <div class="container">
                <h1 class="products-page__h1">Products</h1>
            </div>
        </div>
        `
    }
}

customElements.define('products-page', Products);