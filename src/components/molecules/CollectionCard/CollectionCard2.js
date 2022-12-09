import { Component } from "../../../core/Component/Component";

export class CollectionCard2 extends Component {
    static get observedAttributes() {
        return ["title", "poster", "classname", "altname"];
      }

    render() {
        return `
        
            <a href="./product.html" class="homepage-main__product-section-card-link">
                <img src="../../assets/images/collections/section-2/${this.props.poster}" alt="${this.props.altname}"
                    class="homepage-main__product-section-card-img">
                <h4 class="homepage-main__product-section-card-title-heading">${this.props.title}</h4>
            </a>
        
        `
    }
}

customElements.define('mrd-collection-card2', CollectionCard2);