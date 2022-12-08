import { Component } from "../../../core/Component/Component";

export class FooterBottomBarBottomLine extends Component {

    render() {
        return `
        <div class="footer__bottom-bar-bottom-line">
            <h4 class="footer__bottom-bar-bottom-line-heading-adapt">Follow Us</h4>
            <div class="footer__bottom-bar-bottom-line-social-adapt">
                <a href="#" class="footer__bottom-bar-bottom-line-social-link">
                    <img src="../../assets/images/icons/facebook.svg" alt="facebook"
                        class="footer__bottom-bar-bottom-line-social-link-img">
                </a>
                <a href="#" class="footer__bottom-bar-bottom-line-social-link">
                    <img src="../../assets/images/icons/instagram.svg" alt="instagram"
                        class="footer__bottom-bar-bottom-line-social-link-img">
                </a>
            </div>
            <div class="footer__bottom-bar-bottom-line-rules">
                <nav class="footer__bottom-bar-bottom-line-rules-navigation">
                    <ul class="footer__bottom-bar-bottom-line-rules-list">
                        <li class="footer__bottom-bar-bottom-line-rules-item">
                            <a href="#" class="footer__bottom-bar-bottom-line-rules-item-link">
                                Terms & Conditions</a>
                        </li>
                        <li class="footer__bottom-bar-bottom-line-rules-item">
                            <a href="#" class="footer__bottom-bar-bottom-line-rules-item-link">
                                Privacy Policy</a>
                        </li>
                        <li class="footer__bottom-bar-bottom-line-rules-item">
                            <a href="#" class="footer__bottom-bar-bottom-line-rules-item-link">
                                Shipping Policy</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer__bottom-bar-bottom-line-social">
                <a href="#" class="footer__bottom-bar-bottom-line-social-link">
                    <img src="../../assets/images/icons/facebook.svg" alt="facebook"
                        class="footer__bottom-bar-bottom-line-social-link-img">
                </a>
                <a href="#" class="footer__bottom-bar-bottom-line-social-link">
                    <img src="../../assets/images/icons/instagram.svg" alt="instagram"
                        class="footer__bottom-bar-bottom-line-social-link-img">
                </a>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-footer-bottom-bottom-line', FooterBottomBarBottomLine);