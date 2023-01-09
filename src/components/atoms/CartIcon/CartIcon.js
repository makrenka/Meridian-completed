import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";
import localStorageService from "../../../services/LocalStorageService";
import { STORAGE_KEYS } from '../../../constants/localStorage';

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
            const data = localStorageService.getItem(STORAGE_KEYS.cartData);
            return {
                ...state,
                data: data,
                quantity: data?.length ?? 0,
            }
        })
    }

    componentDidMount() {
        this.countProducts();
    }

    componentWillUnmount() {
        this.countProducts();
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