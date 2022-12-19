import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";
import { databaseService } from "../../../services/Database";

export class ProductPagePopularSection extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            products: [],
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

    getProducts() {
        this.toggleIsLoading();
        databaseService.read("products")
            .then((data) => {
                this.setState((state) => {
                    return {
                        ...state,
                        products: data,
                    }
                });

            })
            .finally(() => {
                this.toggleIsLoading();
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
        <mrd-preloader is-loading="${this.state.isLoading}">
            <section class="product-main__popular">
                <div class="container">
                    <h2 class="product-main__popular-heading">Shop Our Other Popular Sets</h2>
                    <div class="product-main__popular-sets">
                        ${this.state.products.map(({ image, title, price, id }) =>
            `
                            <div class="product-main__popular-set">
                                <img src="${image}" alt="popular-sets-image"
                                    class="product-main__popular-set-img">
                                <h6 class="product-main__popular-set-heading">${title}</h6>
                                <p class="product-main__popular-set-text">£${price}</p>
                                <mrd-link to="${appRoutes.productDetails}/${id}" class="product-main__popular-set-form">
                                    <button class="product-main__popular-set-form-btn">View Set</button>
                                </mrd-link>
                            </div>
                            `
        ).join(' ')}                                       
                    </div>
                </div>
            </section>
        </mrd-preloader>
        `
    }
}

customElements.define('mrd-pp-popular-section', ProductPagePopularSection);