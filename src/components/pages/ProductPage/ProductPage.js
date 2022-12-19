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
        
        <mrd-breadcrump></mrd-breadcrump>
        <mrd-product-page-product-section></mrd-product-page-product-section>
        <mrd-pp-property-section></mrd-pp-property-section>
        <mrd-pp-faq-section></mrd-pp-faq-section>
        <mrd-pp-popular-section></mrd-pp-popular-section>
        <mrd-pp-review-section></mrd-pp-review-section>
        `
    }
}

customElements.define('product-page', ProductPage);