import { Component } from "../../../core/Component/Component";

export class CartTable extends Component {

    render() {
        return `
        <div class="cart__cart">
            <div class="cart__cart-text-wrapper">
                <h2 class="cart__cart-heading">
                    Shopping Cart
                </h2>
                <p class="cart__cart-items">
                    2 Items
                </p>
            </div>
            <table class="cart__cart-table">
                <col class="cart__cart-table-col-1">
                <col class="cart__cart-table-col-2">
                <col class="cart__cart-table-col-3">
                <col class="cart__cart-table-col-4">
                <tr class="cart__cart-table-head">
                    <th>Products</th>
                    <th></th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
                <tr class="cart__cart-table-row">
                    <td>
                        <img src="../../assets/images/gallery/gallery-img1.jpg" alt="cart-image"
                            class="cart__cart-table-img">
                    </td>
                    <td>
                        <p class="cart__cart-table-product-title">
                            Serene Linen Deluxe Cloud
                        </p>
                    </td>
                    <td>
                        <div class="cart__cart-table-row-count-wrapper">
                            <button class="cart__cart-table-count-button">-</button>
                            <p class="cart__cart-table-count">1</p>
                            <button class="cart__cart-table-count-button">+</button>
                        </div>
                    </td>
                    <td>
                        <p class="cart__cart-table-product-price">£2,500.00</p>
                    </td>
                    <td style="text-align: end;">
                        <button class="cart__cart-table-delete-btn">
                            <img src="../../assets/images/icons/delete-cart-button.svg" alt="delete-cart-button">
                        </button>
                    </td>
                </tr>
            </table>
        </div>
        `
    }
}

customElements.define('mrd-cart-table', CartTable);