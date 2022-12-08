import { Component } from "../../../core/Component/Component";

export class FooterBottomBarMiddleLine extends Component {

    render() {
        return `
        <div class="footer__bottom-bar-middle-line">
            <div class="footer__bottom-bar-middle-line-head-office">
                <h4 class="footer__bottom-bar-middle-line-head-office-heading">Head Office</h4>
                <p class="footer__bottom-bar-middle-line-head-office-address">32 Plum St, Trenton, NJ 08638,
                    United States</p>
                <div class="footer__bottom-bar-middle-line-head-office-phone">
                    <img src="../../assets/images/icons/white-phone.svg" alt="phone"
                        class="footer__bottom-bar-middle-line-head-office-phone-img">
                    <a href="tel:+01789339533"
                        class="footer__bottom-bar-middle-line-head-office-phone-link">01789 339533</a>
                </div>
                <div class="footer__bottom-bar-middle-line-head-office-email">
                    <img src="../../assets/images/icons/email.svg" alt="email"
                        class="footer__bottom-bar-middle-line-head-office-email-icon">
                    <a href="mailto:support@Meridian.com"
                        class="footer__bottom-bar-middle-line-head-office-email-link">support@Meridian.com</a>
                </div>
            </div>
            <div class="footer__bottom-bar-middle-line-product">
                <h4 class="footer__bottom-bar-middle-line-product-heading">Product</h4>
                <nav class="footer__bottom-bar-middle-line-product-navigation">
                    <ul class="footer__bottom-bar-middle-line-product-list">
                        <li class="footer__bottom-bar-middle-line-product-item">
                            <a href="#" class="footer__bottom-bar-middle-line-product-item-link">
                                New Arrival</a>
                        </li>
                        <li class="footer__bottom-bar-middle-line-product-item">
                            <a href="#" class="footer__bottom-bar-middle-line-product-item-link">
                                Living Room</a>
                        </li>
                        <li class="footer__bottom-bar-middle-line-product-item">
                            <a href="#" class="footer__bottom-bar-middle-line-product-item-link">
                                Kitchen & Dining Room</a>
                        </li>
                        <li class="footer__bottom-bar-middle-line-product-item">
                            <a href="#" class="footer__bottom-bar-middle-line-product-item-link">
                                Bed Room</a>
                        </li>
                        <li class="footer__bottom-bar-middle-line-product-item">
                            <a href="#" class="footer__bottom-bar-middle-line-product-item-link">
                                Accent</a>
                        </li>
                        <li class="footer__bottom-bar-middle-line-product-item">
                            <a href="#" class="footer__bottom-bar-middle-line-product-item-link">
                                Occasional Table</a>
                        </li>
                        <li class="footer__bottom-bar-middle-line-product-item">
                            <a href="#" class="footer__bottom-bar-middle-line-product-item-link">
                                Office/Home Office</a>
                        </li>
                        <li class="footer__bottom-bar-middle-line-product-item">
                            <a href="#" class="footer__bottom-bar-middle-line-product-item-link">
                                Outdoor Furniture</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer__bottom-bar-middle-line-help">
                <h4 class="footer__bottom-bar-middle-line-help-heading">Help</h4>
                <nav class="footer__bottom-bar-middle-line-help-navigation">
                    <ul class="footer__bottom-bar-middle-line-help-list">
                        <li class="footer__bottom-bar-middle-line-help-item">
                            <a href="#" class="footer__bottom-bar-middle-line-help-item-link">
                                About Us</a>
                        </li>
                        <li class="footer__bottom-bar-middle-line-help-item">
                            <a href="#" class="footer__bottom-bar-middle-line-help-item-link">
                                Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer__bottom-bar-middle-line-email">
                <h4 class="footer__bottom-bar-middle-line-email-heading">
                    Join Meridian for Exclusive Offers
                </h4>
                <form class="footer__bottom-bar-middle-line-email-form">
                    <div class="footer__bottom-bar-middle-line-email-form-input-wrapper">
                        <input type="text" name="user-email" placeholder="Email address"
                            class="footer__bottom-bar-middle-line-email-form-input">
                        <div class="divider"></div>
                    </div>
                    <button type="submit" class="footer__bottom-bar-middle-line-email-form-btn">
                        <img src="../../assets/images/icons/btn-arrow-right.svg" alt="btn-arrow-right">
                    </button>
                </form>
                <p class="footer__bottom-bar-middle-line-email-text">Our newsletter is packed full of style
                    ideas, new products and exclusive disounts. We are GDPR compliant, your information is
                    secure with us.</p>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-footer-bottom-middle-line', FooterBottomBarMiddleLine);