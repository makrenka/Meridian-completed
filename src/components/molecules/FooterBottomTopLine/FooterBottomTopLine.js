import { Component } from "../../../core/Component/Component";

export class FooterBottomTopLine extends Component {

    render() {
        return `
        <div class="footer__bottom-bar-top-line">
            <img src="../../assets/images/icons/main-icon.svg" alt="main-icon"
                class="footer__bottom-bar-top-line-icon">
        </div>
        <div class="divider footer__bottom-bar-divider"></div>
        `
    }
}

customElements.define('mrd-footer-bottom-top-line', FooterBottomTopLine);