import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";

export class CollectionCard extends Component {
    static get observedAttributes() {
        return ["collection-number", "image", "id"];
    }

    render() {
        return `
        
        <mrd-link to="${appRoutes.products}" class="homepage-main__product-section-card-link">
            <img src="${this.props.image}" alt="Collection image"
                class="homepage-main__product-section-card-img">
            <h4 class="homepage-main__product-section-card-title-heading">Collection ${this.props["collection-number"]}</h4>
        </mrd-link>
            
        
        `
    }
}

customElements.define('mrd-collection-card', CollectionCard);