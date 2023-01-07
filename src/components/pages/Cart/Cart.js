import { Component } from "../../../core/Component/Component";

export class Cart extends Component {
    render() {
        return `
        <main class="cart">
            <mrd-breadcrump-cart></mrd-breadcrump-cart>
            <div class="container">
                <div class="cart-wrapper">
                    <mrd-cart-table></mrd-cart-table>
                    <mrd-cart-summary></mrd-cart-summary>
                </div>

                <mrd-cart-table-adapt></mrd-cart-table-adapt>
            </div>

            <mrd-cart-summary-adapt></mrd-cart-summary-adapt>
        </main>
        `
    }
}

customElements.define('cart-page', Cart);