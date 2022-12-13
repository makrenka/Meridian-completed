import { Component } from "../../../core/Component/Component";

export class Cart extends Component {
    render() {
        return `
        <h1>Cart</h1>
        `
    }
}

customElements.define('cart-page', Cart);