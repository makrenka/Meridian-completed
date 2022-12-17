import { Component } from "../../../core/Component/Component";
import { collectionService } from "../../../services/CollectionService";

export class ProductSection extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            collections: [],
        };
    }

    getCollections() {
        collectionService.getAllCollections()
            .then(({ data }) => {
                this.setState((state) => {
                    return {
                        ...state,
                        collections: data,
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
                <div class="homepage-main__product-section-wrapper">
                    ${this.state.collections.map(({ id, title, poster, classname, altname }) => {
            return `
                        <mrd-collection-card
                            id="${id}"
                            title="${title}"
                            poster="${poster}"
                            class="${classname}"
                            altname="${altname}"
                        >
                        </mrd-collection-card>
                        `
        }).join(' ')}
                    
                    
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('mrd-product-section', ProductSection);