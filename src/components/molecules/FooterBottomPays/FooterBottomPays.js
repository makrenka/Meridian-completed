import { Component } from "../../../core/Component/Component";

export class FooterBottomPays extends Component {

    render() {
        return `
        <div class="footer__bottom-bar-pays">
            <img src="../../assets/images/pays-icons/card.png" alt="card" class="footer__bottom-bar-pays-img">
            <img src="../../assets/images/pays-icons/visa.png" alt="visa" class="footer__bottom-bar-pays-img">
            <img src="../../assets/images/pays-icons/google-pay.png" alt="google-pay"
                class="footer__bottom-bar-pays-img">
            <img src="../../assets/images/pays-icons/apple-pay.png" alt="apple-pay"
                class="footer__bottom-bar-pays-img">
        </div>
        `
    }
}

customElements.define('mrd-footer-bottom-pays', FooterBottomPays);