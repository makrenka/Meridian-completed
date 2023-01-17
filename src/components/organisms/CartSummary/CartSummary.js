import { Component } from "../../../core/Component/Component";
import localStorageService from "../../../services/LocalStorageService";
import { STORAGE_KEYS } from '../../../constants/localStorage';
import { eventBus } from "../../../core/EventBus";
import { appEvents } from "../../../constants/appEvents";

export class CartSummary extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            option: 'option1',
        }
    }

    getData = () => {
        const data = localStorageService.getItem(STORAGE_KEYS.cartData);
        this.setState((state) => {
            return {
                ...state,
                data: data,
            }
        })
    }

    handleRadioChange = (evt) => {
        this.setState((state) => {
            return {
                ...state,
                option: evt.target.value,
            }
        })

    }

    componentDidMount() {
        this.getData();
        eventBus.on(appEvents.localStorage, this.getData);
        this.addEventListener("change", this.handleRadioChange);
    }

    componentWillUnmount() {
        this.getData();
        eventBus.off(appEvents.localStorage, this.getData);
        this.removeEventListener("change", this.handleRadioChange)
    }

    render() {
        const subtotal = this.state.data.reduce((acc, item) => {
            return acc + Number(item.price) * item.quantity
        }, 0);

        return `
        <form class="cart__summary">
            <h2 class="cart__summary-heading">
                Order Summary
            </h2>
            <div class="cart__summary-body">
                <div class="cart__summary-body-subtotal-wrapper">
                    <p class="cart__summary-body-subtotal">Subtotal</p>
                    <p class="cart__summary-body-subtotal-value">£${subtotal.toFixed(2)}</p>
                </div>
                <p class="cart__summary-body-tax">
                    (includes £${(subtotal * 0.2).toFixed(2)} 20% VAT)
                </p>

                <div class="cart__summary-body-input">
                    <div class="cart__summary-body-input-wrapper">
                        <input 
                            type="radio" 
                            value="option1" 
                            class="cart__summary-body-input-btn"
                            name="shipping" 
                            id="standardShipping" 
                        >
                        <label for="standardShipping" class="cart__summary-body-input-text">
                            Standard Free Shipping
                        </label>
                    </div>
                    <p class="cart__summary-body-input-price">£00.00</p>
                </div>
                <div class="cart__summary-body-input">
                    <div class="cart__summary-body-input-wrapper">
                        <input 
                            type="radio" 
                            value="option2" 
                            class="cart__summary-body-input-btn"
                            name="shipping" 
                            id="premiumShipping" 
                        >
                        <label for="premiumShipping" class="cart__summary-body-input-text">
                            Premium Shipping
                        </label>
                    </div>
                    <p class="cart__summary-body-input-price">£118.80</p>
                </div>

                <div class="cart__summary-body-total-wrapper">
                    <p class="cart__summary-body-total">Total</p>
                    <p class="cart__summary-body-total-value">£5,000.00</p>
                </div>
                <button class="cart__summary-body-button">Proceed To Checkout</button>
                <div class="cart__summary-body-pays">
                    <img src="../../assets/images/pays-icons/card.png" alt="card" class="cart__summary-body-pays-img">
                    <img src="../../assets/images/pays-icons/visa.png" alt="visa" class="cart__summary-body-pays-img">
                    <img src="../../assets/images/pays-icons/google-pay.png" alt="google-pay"
                        class="cart__summary-body-pays-img">
                    <img src="../../assets/images/pays-icons/apple-pay.png" alt="apple-pay"
                        class="cart__summary-body-pays-img">
                </div>
                <p class="cart__summary-body-discount-text">
                    Discount prices will be active after entering the checkout process
                </p>
            </div>
        </form>
        `
    }
}

customElements.define('mrd-cart-summary', CartSummary);