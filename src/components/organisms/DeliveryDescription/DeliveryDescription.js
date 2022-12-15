import { Component } from "../../../core/Component/Component";

export class DeliveryDescription extends Component {

    toggleClasses(evt) {
        const articles = [...this
            .querySelectorAll('.product-main__product-section-options-delivery-description-section-article')];
        const links = [...this
            .querySelectorAll('.product-main__product-section-options-delivery-description-nav-link')];
        const target = evt.target.closest('.product-main__product-section-options-delivery-description-nav-link')
        const article = articles.filter(item => target.className.includes(item.id));

        if(target) {
            links.forEach(item => item.classList
                .remove('product-main__product-section-options-delivery-description-nav-link--active'))
            target.classList.add('product-main__product-section-options-delivery-description-nav-link--active');
            articles.forEach(item => item.classList
                .remove('product-main__product-section-options-delivery-description-section-article--active'))
            article.forEach(item => item
                .classList.add('product-main__product-section-options-delivery-description-section-article--active'));
        } 
    }

    componentDidMount() {
        this.addEventListener('click', this.toggleClasses);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.toggleClasses);
    }

    render() {

        return `
        
        <div class="product-main__product-section-options-delivery-description">
            <div class="product-main__product-section-options-delivery-description-nav">
                <p class="product-main__product-section-options-delivery-description-nav-link included
                    product-main__product-section-options-delivery-description-nav-link--active">
                    What’s Included?</p>
                <p
                    class="product-main__product-section-options-delivery-description-nav-link bringing">
                    Delivery
                </p>
                <p
                    class="product-main__product-section-options-delivery-description-nav-link dimensions">
                    Dimensions
                </p>
                <p
                    class="product-main__product-section-options-delivery-description-nav-link finance">
                    Finance
                </p>
            </div>
            
            <div class="product-main__product-section-options-delivery-description-section">
                <article id="included"
                    class="product-main__product-section-options-delivery-description-section-article 
                    product-main__product-section-options-delivery-description-section-article--active">
                    <h5
                        class="product-main__product-section-options-delivery-description-section-article-heading">
                        What’s Included?
                    </h5>
                    <p
                        class="product-main__product-section-options-delivery-description-section-article-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam amet justo
                        mi pharetra, consectetur facilisis. Velit est proin orci tristique nunc
                        varius. Id consectetur nibh at aliquet habitant proin volutpat
                        adipiscing nisl. Facilisi donec tellus aliquet sed at non amet, massa.
                    </p>
                </article>
                <article id="bringing"
                    class="product-main__product-section-options-delivery-description-section-article">
                    <h5
                        class="product-main__product-section-options-delivery-description-section-article-heading">
                        Delivery
                    </h5>
                    <p
                        class="product-main__product-section-options-delivery-description-section-article-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam amet justo
                        mi pharetra, consectetur facilisis. Velit est proin orci tristique nunc
                        varius. Id consectetur nibh at aliquet habitant proin volutpat
                        adipiscing nisl. Facilisi donec tellus aliquet sed at non amet, massa.
                    </p>
                </article>
                <article id="dimensions"
                    class="product-main__product-section-options-delivery-description-section-article">
                    <h5
                        class="product-main__product-section-options-delivery-description-section-article-heading">
                        Dimensions
                    </h5>
                    <p
                        class="product-main__product-section-options-delivery-description-section-article-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam amet justo
                        mi pharetra, consectetur facilisis. Velit est proin orci tristique nunc
                        varius. Id consectetur nibh at aliquet habitant proin volutpat
                        adipiscing nisl. Facilisi donec tellus aliquet sed at non amet, massa.
                    </p>
                </article>
                <article id="finance"
                    class="product-main__product-section-options-delivery-description-section-article">
                    <h5
                        class="product-main__product-section-options-delivery-description-section-article-heading">
                        Finance
                    </h5>
                    <p
                        class="product-main__product-section-options-delivery-description-section-article-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam amet justo
                        mi pharetra, consectetur facilisis. Velit est proin orci tristique nunc
                        varius. Id consectetur nibh at aliquet habitant proin volutpat
                        adipiscing nisl. Facilisi donec tellus aliquet sed at non amet, massa.
                    </p>
                </article>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-delivery-description', DeliveryDescription);