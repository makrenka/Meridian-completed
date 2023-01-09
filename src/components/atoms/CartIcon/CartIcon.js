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

    cartDataAdapter = (data) => {
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

        this.state.quantity = cartData.reduce((acc, current) => (acc += current.quantity), 0);

        return cartData;

    }

    initializeData = () => {
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
        console.log(this.state.quantity)
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