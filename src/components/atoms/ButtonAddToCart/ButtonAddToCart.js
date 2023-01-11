import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";
import localStorageService from "../../../services/LocalStorageService";
import { STORAGE_KEYS } from '../../../constants/localStorage';
import { databaseService } from "../../../services/Database";

export class ButtonAddToCart extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            product: {},
        }
    }

    static get observedAttributes() {
        return ["id"];
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        })
    }

    getProduct() {
        this.toggleIsLoading();
        databaseService.getDocument("products", this.props.id)
            .then((data) => {
                this.setState((state) => {
                    return {
                        ...state,
                        product: data,
                    }
                });

            })
            .finally(() => {
                this.state.product.id = this.props.id;
                this.state.product.quantity = 1;
                this.toggleIsLoading();
            })
    }

    onClick(evt) {
        if (evt.target.closest('.product-main__product-section-options-form-btn')) {
            const data = localStorageService.getItem(STORAGE_KEYS.cartData) ?? [];
            localStorageService.setItem(STORAGE_KEYS.cartData, [...data, this.state.product]);
        }
    }

    componentDidMount() {
        this.getProduct();
        this.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        this.getProduct();
        this.removeEventListener('click', this.onClick);
    }

    render() {

        return `
        <mrd-preloader is-loading="${this.state.isLoading}">            
            <form class="product-main__product-section-options-form">
                <button class="product-main__product-section-options-form-btn">Add To Cart</button>
            </form>            
        </mrd-preloader>
        `
    }
}

customElements.define('mrd-button-add-to-cart', ButtonAddToCart);