import { Component } from "../../../core/Component/Component";

export class FooterBottomBar extends Component {

    render() {
        return `
        <div class="footer__bottom-bar">
            <div class="container">
                <div class="footer__bottom-bar-wrapper">

                <mrd-footer-bottom-top-line></mrd-footer-bottom-top-line>
                <mrd-footer-bottom-middle-line></mrd-footer-bottom-middle-line>
                <mrd-footer-bottom-bottom-line></mrd-footer-bottom-bottom-line>
                <mrd-footer-bottom-pays></mrd-footer-bottom-pays>

                </div>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-footer-bottom', FooterBottomBar);