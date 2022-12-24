import { Component } from "../../../core/Component/Component";
import { databaseService } from "../../../services/Database";

export class ProductDescription extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            comments: [],
        }
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        })
    }

    getComments() {
        this.toggleIsLoading();
        databaseService.read("comments")
            .then((data) => {
                this.setState((state) => {
                    return {
                        ...state,
                        comments: data,
                    }
                });

            })
            .finally(() => {
                this.toggleIsLoading();
            })
    }

    static get observedAttributes() {
        return [
            "title",
            "price",
            "discount",
            "delivery",
            "dimensions",
            "finance",
            "includes",
        ];
    }

    componentDidMount() {
        this.getComments();
    }

    componentWillUnmount() {
        this.getComments();
    }

    render() {
        const filt = this.state.comments.filter(item => item.product == this.props.title);
        const avrGrade = !filt.length == 0 ? Math.round(filt.map(({ grade }) => Number(grade))
            .reduce((sum, current) => sum + current, 0) / filt.length) : '0';

        return `
        <mrd-preloader is-loading="${this.state.isLoading}">
            <div class="product-main__product-section-options">
                <mrd-product-description-heading
                    title="${this.props.title}"
                    price="${this.props.price}"
                    discount="${this.props.discount}"
                >
                </mrd-product-description-heading>

                <mrd-product-rating
                    grade="${avrGrade}"
                >
                </mrd-product-rating>           
                <p class="product-main__product-section-options-rating-text">${avrGrade} (${filt.length} customers review)</p>

                <mrd-product-colors></mrd-product-colors>
                <mrd-button-add-to-cart></mrd-button-add-to-cart>
                <mrd-product-paying></mrd-product-paying>
                <mrd-product-delivery></mrd-product-delivery>

                <mrd-delivery-description
                    delivery="${this.props.delivery}"
                    dimensions="${this.props.dimensions}"
                    finance="${this.props.finance}"
                    includes="${this.props.includes}"
                >
                </mrd-delivery-description>
            </div>
        </mrd-preloader>
        `
    }
}

customElements.define('mrd-product-description', ProductDescription);