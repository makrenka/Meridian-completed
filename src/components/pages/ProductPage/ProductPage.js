import { Component } from "../../../core/Component/Component";
import { databaseService } from "../../../services/Database";

export class ProductPage extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            product: null,
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

    getProducts() {
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
                this.toggleIsLoading();
                console.log(this.state.product)
            })
    }

    componentDidMount() {
        this.getProducts();
    }

    componentWillUnmount() {
        this.getProducts();
    }

    render() {
        return `
        <mrd-product-page-main></mrd-product-page-main>
        `
    }
}

customElements.define('product-page', ProductPage);