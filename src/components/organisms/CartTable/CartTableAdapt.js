import { Component } from "../../../core/Component/Component";
import localStorageService from "../../../services/LocalStorageService";
import { STORAGE_KEYS } from '../../../constants/localStorage';
import { eventBus } from "../../../core/EventBus";
import { appEvents } from "../../../constants/appEvents";

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
                quantity: arr.filter((subItem) => subItem.id === item.id).length > 1
                    ? arr.filter((subItem) => subItem.id === item.id).length
                    : item.quantity,
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
        const quantityCount = data.reduce((acc, item) => {
            return acc + item.quantity
        }, 0);
        this.setState((state) => {
            return {
                ...state,
                data: data ? this.cartDataAdapter(data) : [],
                quantity: quantityCount ?? 0,
            }
        })
    }

    decreaseQuantity(evt) {
        const data = this.state.data;
        if (evt.target.closest('.minus-btn')) {
            const productId = evt.target.dataset.productId;
            const filteredData = data.map((item) => {
                if (item.id == productId) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                };
                return {
                    ...item,
                };
            }).filter((item) => Boolean(item.quantity));
            localStorageService.setItem(STORAGE_KEYS.cartData, filteredData);
        };
    }

    increaseQuantity(evt) {
        const data = this.state.data;
        if (evt.target.closest('.plus-btn')) {
            const productId = evt.target.dataset.productId;
            const filteredData = data.map((item) => {
                if (item.id == productId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                };
                return {
                    ...item,
                };
            }).filter((item) => Boolean(item.quantity));
            localStorageService.setItem(STORAGE_KEYS.cartData, filteredData);
        };
    }

    deleteItem(evt) {
        const data = this.state.data;
        if (evt.target.closest('.delete-cart-button')) {
            const productId = evt.target.dataset.productId;
            const filteredData = data.map((item) => {
                if (item.id == productId) {
                    return {
                        ...item,
                        quantity: 0,
                    }
                };
                return {
                    ...item,
                };
            }).filter((item) => Boolean(item.quantity));
            localStorageService.setItem(STORAGE_KEYS.cartData, filteredData);
        }
    }

    changeQuantity(evt) {
        this.decreaseQuantity(evt);
        this.increaseQuantity(evt);
        this.deleteItem(evt);
        const data = localStorageService.getItem(STORAGE_KEYS.cartData);
        const quantityCount = data.reduce((acc, item) => {
            return acc + item.quantity
        }, 0);
        this.setState((state) => {
            return {
                ...state,
                data: data,
                quantity: quantityCount ?? 0,
            }
        });
        eventBus.emit(appEvents.localStorage);
    }

    componentDidMount() {
        this.addEventListener('click', this.changeQuantity);
        this.initializeData();
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.changeQuantity);
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
                            <button class="cart__cart-table-count-button minus-btn"
                            data-product-id="${item.id}">-</button>
                            <p class="cart__cart-table-count">${item.quantity}</p>
                            <button class="cart__cart-table-count-button plus-btn"
                            data-product-id="${item.id}">+</button>
                        </div>
                        <button class="cart__cart-table-delete-btn delete-cart-button"
                        data-product-id="${item.id}">
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