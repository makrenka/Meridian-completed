import { Component } from "../../../core/Component/Component";

export class DeliveryDescription extends Component {

    removeClass = () => {
        const links = [...this
            .querySelectorAll('.product-main__product-section-options-delivery-description-nav-link')]
            .filter(item => item.className.endsWith('active'))
            .forEach(item => item
                .classList.remove('product-main__product-section-options-delivery-description-nav-link--active'));
    }

    addClassOnload = () => {
        const pgurl = window.location;
        const links = [...this
            .querySelectorAll('.product-main__product-section-options-delivery-description-nav-link')]
            .filter(item => pgurl.href.endsWith(item.href))
            .forEach(item => item
                .classList.add('product-main__product-section-options-delivery-description-nav-link--active'))
    }

    addClassOnclick = (evt) => {
        const link = evt.target
            .closest('.product-main__product-section-options-delivery-description-nav-link')
            .classList.add('product-main__product-section-options-delivery-description-nav-link--active');
    }

    componentDidMount() {
        this.addEventListener('click', this.removeClass);
        this.addClassOnload();
        this.addEventListener('click', this.addClassOnclick);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.removeClass);
        this.addClassOnload();
        this.removeEventListener('click', this.addClassOnclick);
    }

    static get observedAttributes() {
        return ['name'];
    }
 
    render() {
        return `
        
        <div class="product-main__product-section-options-delivery-description">
            <div class="product-main__product-section-options-delivery-description-nav-wrapper">
                <nav class="product-main__product-section-options-delivery-description-nav">
                    <a href="#include${this.props.name}"
                        class="product-main__product-section-options-delivery-description-nav-link">
                        What’s Included?</a>
                    <a href="#delivery${this.props.name}"
                        class="product-main__product-section-options-delivery-description-nav-link">
                        Delivery
                    </a>
                    <a href="#dimensions${this.props.name}"
                        class="product-main__product-section-options-delivery-description-nav-link">
                        Dimensions
                    </a>
                    <a href="#finance${this.props.name}"
                        class="product-main__product-section-options-delivery-description-nav-link">
                        Finance
                    </a>
                </nav>
            </div>
            <section class="product-main__product-section-options-delivery-description-section">
                <article id="include${this.props.name}"
                    class="product-main__product-section-options-delivery-description-section-article">
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
                <article id="delivery${this.props.name}"
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
                <article id="dimensions${this.props.name}"
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
                <article id="finance${this.props.name}"
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
            </section>
        </div>
        `
    }
}

customElements.define('mrd-delivery-description', DeliveryDescription);