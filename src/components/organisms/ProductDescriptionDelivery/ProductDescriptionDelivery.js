import { Component } from "../../../core/Component/Component";

export class ProductDescriptionDelivery extends Component {

    render() {
        return `
        
        <div class="product-main__product-section-options-delivery">
            <div class="product-main__product-section-options-delivery-free">
                <object data="../../assets/images/icons/delivery-truck-icon.svg"
                    class="product-main__product-section-options-delivery-free-icon"></object>
                <div class="product-main__product-section-options-delivery-free-text-wrapper">
                    <h5 class="product-main__product-section-options-delivery-free-heading">
                        Free UK Delivery
                    </h5>
                    <p class="product-main__product-section-options-delivery-free-text">
                        Order now and enjoy free delivery on us! Restrictions apply.
                    </p>
                </div>
            </div>
            <div class="product-main__product-section-options-delivery-description">
                <div class="product-main__product-section-options-delivery-description-nav-wrapper">
                    <nav class="product-main__product-section-options-delivery-description-nav">
                        <a href="#include"
                            class="product-main__product-section-options-delivery-description-nav-link">
                            What’s Included?</a>
                        <a href="#delivery"
                            class="product-main__product-section-options-delivery-description-nav-link">
                            Delivery
                        </a>
                        <a href="#dimensions"
                            class="product-main__product-section-options-delivery-description-nav-link">
                            Dimensions
                        </a>
                        <a href="#finance"
                            class="product-main__product-section-options-delivery-description-nav-link">
                            Finance
                        </a>
                    </nav>
                </div>
                <section class="product-main__product-section-options-delivery-description-section">
                    <article id="include"
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
                    <article id="delivery"
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
                </section>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-product-delivery', ProductDescriptionDelivery);