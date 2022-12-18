import { Component } from "../../../core/Component/Component";
import { collectionService } from "../../../services/CollectionService";
import { databaseService } from "../../../services/Database";

export class ProductSection extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            collections: [],
        };
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        })
    }

    getCollections() {
        this.toggleIsLoading();
        databaseService.read("collections")
            .then((data) => {
                this.setState((state) => {
                    return {
                        ...state,
                        collections: data,
                    }
                });

            })
            .finally(() => {
                this.toggleIsLoading();
            })
    }

    componentDidMount() {
        this.getCollections();
    }

    componentWillUnmount() {
        this.getCollections();
    }

    render() {
        return `
        
        <section class="homepage-main__product-section">
            <div class="container">
                <div class="homepage-main__product-section-wrapper">
                    ${this.state.collections.map(({ image, collectionNumber }) => {
            return `
                        <mrd-collection-card
                            image="${image}"
                            collection-number="${collectionNumber}"
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