import { Component } from "../../../core/Component/Component";
import { collectionService } from "../../../services/CollectionService";
import { databaseService } from "../../../services/Database";

export class ProductSectionTwo extends Component {
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
                        collections: data
                            .sort((a, b) => a.collectionNumber > b.collectionNumber ? 1 : -1)
                            .filter(item => item.sectionNumber == 2),
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
                <h2 class="homepage-main__product-section-heading">Explore each unique collection</h2>
                <p class="homepage-main__product-section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Est id pretium pellentesque leo. Lorem.</p>
                <div class="homepage-main__product-section-wrapper">
                ${this.state.collections
                .slice(0, 5).map(({ image, collectionNumber }) => {
                    return `
                        <mrd-collection-card
                            image="${image}"
                            collection-number="${collectionNumber}"
                            class="homepage-main__product-section-card-${collectionNumber}"
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

customElements.define('mrd-product-section2', ProductSectionTwo);