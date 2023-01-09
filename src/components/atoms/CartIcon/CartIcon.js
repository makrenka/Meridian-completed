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
        this.state.data = data ? this.cartDataAdapter(data) : [];
        this.state.quantity = data?.length ?? 0;
    }

    watchOnData() {
        eventBus.on(appEvents.localStorage, (evt) => {
            this.state.data = this.cartDataAdapter(evt.detail.value);
        });
        this.render();
    }

    componentDidMount() {
        this.initializeData();
        this.watchOnData();
    }

    componentWillUnmount() {
        this.initializeData();
        this.watchOnData();
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