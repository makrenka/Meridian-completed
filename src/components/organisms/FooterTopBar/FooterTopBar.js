import { Component } from "../../../core/Component/Component";

export class FooterTopBar extends Component {

    render() {
        return `
        <div class="footer__top-bar">
            <div class="container">
                <div class="footer__top-bar-wrapper">
                    <div class="footer__top-bar-service">
                        <h2 class="footer__top-bar-service-heading">How Can We Help You?</h2>
                        <p class="footer__top-bar-service-text">We pride ourselves on superior customer service. Speak
                            to a
                            member of our sales team to help with your order. </p>
                        <p class="footer__top-bar-service-contact">Get In Touch support@Meridian.com </p>
                    </div>
                    <div class="footer__top-bar-service-phone">
                        <div class="footer__top-bar-service-phone-wrapper">
                            <div class="footer__top-bar-service-phone-number">
                                <img src="../../assets/images/icons/phone.svg" alt="phone"
                                    class="footer__top-bar-service-phone-icon">
                                <a href="tel:+01789339533" class="footer__top-bar-service-phone-link">01789 339533</a>
                            </div>
                            <p class="footer__top-bar-service-phone-description">8am to 6pm, 7 days a week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-footer-top', FooterTopBar);