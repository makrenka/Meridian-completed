import { Component } from "../../../core/Component/Component";
import { eventBus } from "../../../core/EventBus";

export class CartInputGroup extends Component {

    onClick = (evt) => {
        evt.taget.closest(".cart__summary-body-input-btn")
        console.log(evt.taget)
    }

    componentDidMount() {
        this.addEventListener("click", this.onClick);
    }

    componentWillUnmount() {
        this.removeEventListener("click", this.onClick);
    }

    render() {

        return `
        <div class="cart__summary-body-input">
            <div class="cart__summary-body-input-wrapper">
                <input 
                    type="radio" 
                    value="0" 
                    class="cart__summary-body-input-btn"
                    name="shipping" 
                    id="standardShipping" 
                    checked 
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
                    value="118.8" 
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
        `
    }
}

customElements.define('mrd-cart-input-group', CartInputGroup);