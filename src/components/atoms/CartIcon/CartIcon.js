import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";
import localStorageService from "../../../services/LocalStorageService";
import { STORAGE_KEYS } from '../../../constants/localStorage';
import { eventBus } from "../../../core/EventBus";
import { appEvents } from "../../../constants/appEvents";

export class CartIcon extends Component {
    constructor() {
        super();
        this.state = {
            quantity: 0,
            data: [],
        }
    }

    countProducts = () => {
        this.setState((state) => {
            const data = localStorageService.getItem(STORAGE_KEYS.cartData) ?? [];
            const quantityCount = data.reduce((acc, item) => {
                return acc + item.quantity
            }, 0);
            return {
                ...state,
                data: data,
                quantity: quantityCount ?? 0,
            }
        })
    }

    componentDidMount() {
        this.countProducts();
        eventBus.on(appEvents.localStorage, this.countProducts);
    }

    componentWillUnmount() {
        this.countProducts();
        eventBus.off(appEvents.localStorage, this.countProducts);
    }

    render() {

        return `
        <mrd-link to="${appRoutes.cart}">
            <div class="header__main-bar-icons-cart">
                <img src="../../assets/images/icons/cart.svg" alt="cart-icon" class="header__main-bar-icons-cart-img">
                <div class="header__main-bar-icons-cart-counter">
                    <span class="header__main-bar-icons-cart-counter-text">${this.state.quantity}</span>
                </div>
            </div>
        </mrd-link>
        `
    }
}

customElements.define('mrd-cart-icon', CartIcon);