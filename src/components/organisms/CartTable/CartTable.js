import { Component } from "../../../core/Component/Component";
import localStorageService from "../../../services/LocalStorageService";
import { STORAGE_KEYS } from '../../../constants/localStorage';

export class CartTable extends Component {
    constructor() {
        super();
        this.state = {
            quantity: 0,
            isVisible: false,
            data: [],
        }
    }

    cartDataAdapter(data) {
        const cartData = data.map((item, _, arr) => {
            return {
                ...item,
                quantity: item.quantity
                    ? item.quantity
                    : arr.filter((subItem) => subItem.title === item.title).length,
            }
        })
            .filter(
                (item, index, arr) =>
                    arr.findIndex((finditem) => finditem.title === item.title) === index
            );

        return cartData;
    }

    initializeData() {
        const data = localStorageService.getItem(STORAGE_KEYS.cartData);
        this.setState((state) => {
            return {
                ...state,
                data: data ? this.cartDataAdapter(data) : [],
                quantity: data?.length ?? 0,
            }
        })
    }

    componentDidMount() {
        this.initializeData();
    }

    componentWillUnmount() {
        this.initializeData();
    }

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