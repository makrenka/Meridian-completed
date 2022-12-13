import { Component } from "../../../core/Component/Component";

export class Products extends Component {
    render() {
        return `
        <h1>Products</h1>
        `
    }
}

customElements.define('products-page', Products);