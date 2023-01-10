import { Component } from "../../../core/Component/Component";
import localStorageService from "../../../services/LocalStorageService";
import { STORAGE_KEYS } from '../../../constants/localStorage';

export class CartTableAdapt extends Component {
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

    componentDidMount() {
        this.initializeData();
    }

    componentWillUnmount() {
        this.initializeData();
    }

    render() {
        return `
        <div class="cart__adapt">
            ${this.state.data.length ? `
            ${this.state.data.map((item) => `
            <div class="cart__adapt-product">
                <img src="${item.image1}" class="cart__cart-table-img">
                <div class="cart__adapt-product-wrapper">
                    <div class="cart__adapt-product-text-wrapper">
                        <p class="cart__cart-table-product-title">
                            ${item.title}
                        </p>
                        <p class="cart__cart-table-product-price">£${Number(item.price).toFixed(2)}</p>
                    </div>
                    <div class="cart__adapt-buttons-wrapper">
                        <div class="cart__cart-table-row-count-wrapper">
                            <button class="cart__cart-table-count-button">-</button>
                            <p class="cart__cart-table-count">${item.quantity}</p>
                            <button class="cart__cart-table-count-button">+</button>
                        </div>
                        <button class="cart__cart-table-delete-btn">
                            Remove
                            <img src="../../assets/images/icons/cart-trash-btn.svg" alt="delete-cart-button">
                        </button>
                    </div>
                </div>
            </div>
            `).join(' ')}
            ` : `
            <p class="cart__cart-table-product-title">
                Your cart is empty
            </p>
            `}
            
            
        </div>
        `
    }
}

customElements.define('mrd-cart-table-adapt', CartTableAdapt);