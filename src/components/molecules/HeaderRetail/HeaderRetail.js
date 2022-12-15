import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";

export class HeaderRetail extends Component {

    render() {
        return `
        
        
            <ul class="header__main-bar-retail-section-list">
                <li class="header__main-bar-retail-section-list-item">
                    <mrd-link to="${appRoutes.signIn}">
                        <span class="header__main-bar-retail-section-list-link">Dealer Login</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-retail-section-list-item">
                    <mrd-link to="${appRoutes.signUp}">
                        <span class="header__main-bar-retail-section-list-link">Become A Dealer</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-retail-section-list-item">
                    <mrd-link to="${appRoutes.findRetail}">
                        <span class="header__main-bar-retail-section-list-link">Find A Retail</span>
                    </mrd-link>
                </li>
            </ul>
        
        `
    }
}

customElements.define('mrd-header-retail', HeaderRetail);