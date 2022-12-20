import { Component } from "../../../core/Component/Component";
import { databaseService } from "../../../services/Database";

export class ProductPage extends Component {
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
                this.toggleIsLoading();
            })
    }

    componentDidMount() {
        this.getProduct();
    }

    componentWillUnmount() {
        this.getProduct();
    }

    render() {

        const {
            product: {
                image1,
                image2,
                image3,
                image4,
                image5,
                title,
                price,
                discount,
                delivery,
                dimensions,
                finance,
                includes }
        } = this.state;

        return `
        <it-preloader is-loading="${this.state.isLoading}">
            <mrd-breadcrump></mrd-breadcrump>
            <mrd-product-page-product-section
                image1="${image1}"
                image2="${image2}"
                image3="${image3}"
                image4="${image4}"
                image5="${image5}"
                title="${title}"
                price="${price}"
                discount="${discount}"
                delivery="${delivery}"
                dimensions="${dimensions}"
                finance="${finance}"
                includes="${includes}"
            >
            </mrd-product-page-product-section>
            <mrd-pp-property-section></mrd-pp-property-section>
            <mrd-pp-faq-section></mrd-pp-faq-section>
            <mrd-pp-popular-section></mrd-pp-popular-section>
            <mrd-pp-review-section></mrd-pp-review-section>
        </it-preloader>
        `
    }
}

customElements.define('product-page', ProductPage);