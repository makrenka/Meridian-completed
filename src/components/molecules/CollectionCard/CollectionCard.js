import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";

export class CollectionCard extends Component {
    static get observedAttributes() {
        return ["title", "poster", "classname", "altname"];
      }

    render() {
        return `
        
        <mrd-link to="${appRoutes.productDetails}" class="homepage-main__product-section-card-link">
            <img src="../../assets/images/collections/section-1/${this.props.poster}" alt="${this.props.altname}"
                class="homepage-main__product-section-card-img">
            <h4 class="homepage-main__product-section-card-title-heading">${this.props.title}</h4>
        </mrd-link>
            
        
        `
    }
}

customElements.define('mrd-collection-card', CollectionCard);