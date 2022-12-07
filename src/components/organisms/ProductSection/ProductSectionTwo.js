import { Component } from "../../../core/Component/Component";
import { collectionService } from "../../../services/CollectionService";

export class ProductSectionTwo extends Component {
    constructor() {
        super();
        this.state = {
            collections: [],
        }
    }

    getCollections() {
        collectionService.getAllCollections()
            .then(({ data2 }) => {
                this.setState((state) => {
                    return {
                        ...state,
                        collections: data2,
                    }
                })
            })
    }

    componentDidMount() {
        this.getCollections();
    }

    render() {
        return `
        
        <section class="homepage-main__product-section">
            <div class="container">
                <h2 class="homepage-main__product-section-heading">Explore each unique collection</h2>
                <p class="homepage-main__product-section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Est id pretium pellentesque leo. Lorem.</p>
                <div class="homepage-main__product-section-wrapper">
                    ${this.state.collections.map(({ id, title, poster, classname, altname }) => {
                        return `
                        <mrd-collection-card2
                            id="${id}"
                            title="${title}"
                            poster="${poster}"
                            class="${classname}"
                            altname="${altname}"
                        >
                        </mrd-collection-card2>
                        `
                    }).join(' ')}
                    
                    
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('mrd-product-section2', ProductSectionTwo);