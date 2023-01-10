import { Component } from "../../../core/Component/Component";
import localStorageService from "../../../services/LocalStorageService";
import { STORAGE_KEYS } from '../../../constants/localStorage';

export class CartTable extends Component {
    constructor() {
        super();
        this.state = {
            quantity: 0,
            data: [],
        }
    }

    cartDataAdapter(data) {
        const cartData = data.map((item, _, arr) => {
            return {
                ...item,
                quantity: item.quantity
                    ? item.quantity
                    : arr.filter((subItem) => subItem.id === item.id).length,
            }
        })
            .filter(
                (item, index, arr) =>
                    arr.findIndex((finditem) => finditem.id === item.id) === index
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

    increaseQuantity() {
        this.setState((state) => {
            return {
                ...state,
                quantity: state.quantity + 1,
            }
        })
    }

    decreaseQuantity() {
        this.setState((state) => {
            return {
                ...state,
                quantity: state.quantity - 1,
            }
        })
    }

    changeQuantity(evt) {
        if (evt.target.closest('.minus-btn')) {
            this.decreaseQuantity();
        };
        if (evt.target.closest('.plus-btn')) {
            this.increaseQuantity();
        };
    }

    componentDidMount() {
        this.initializeData();
        this.addEventListener('click', this.changeQuantity);
    }

    componentWillUnmount() {
        this.initializeData();
        this.removeEventListener('click', this.changeQuantity);
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
                ${this.state.data.length ? `
                ${this.state.data.map((item) => `
                <tr class="cart__cart-table-row">
                    <td>
                        <img src="${item.image1}" alt="cart-image" class="cart__cart-table-img">                        
                    </td>
                    <td>
                        <p class="cart__cart-table-product-title">
                            ${item.title}
                        </p>
                    </td>
                    <td>
                        <div class="cart__cart-table-row-count-wrapper">
                            <button class="cart__cart-table-count-button minus-btn">-</button>
                            <p class="cart__cart-table-count">${item.quantity}</p>
                            <button class="cart__cart-table-count-button plus-btn">+</button>
                        </div>
                    </td>
                    <td>
                        <p class="cart__cart-table-product-price">£${Number(item.price).toFixed(2)}</p>
                    </td>
                    <td style="text-align: end;">
                        <button class="cart__cart-table-delete-btn">
                            <img src="../../assets/images/icons/delete-cart-button.svg" alt="delete-cart-button">
                        </button>
                    </td>
                </tr>
                `).join(' ')}
                ` : `
                    <tr>
                        <td colspan=2>
                            <p class="cart__cart-table-product-price empty-cart">Your cart is empty</p>                    
                        </td>
                    </tr>
                `}
                
                
            </table>
        </div>
        `
    }
}

customElements.define('mrd-cart-table', CartTable);