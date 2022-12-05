import { Component } from "../../../core/Component/Component";

export class HeaderRetail extends Component {

    render() {
        return `
        
        <nav class="header__main-bar-retail-section">
            <ul class="header__main-bar-retail-section-list">
                <li class="header__main-bar-retail-section-list-item">
                    <a href="#" class="header__main-bar-retail-section-list-link">Dealer Login</a>
                </li>
                <li class="header__main-bar-retail-section-list-item">
                    <a href="#" class="header__main-bar-retail-section-list-link">Become A Dealer</a>
                </li>
                <li class="header__main-bar-retail-section-list-item">
                    <a href="#" class="header__main-bar-retail-section-list-link">Find A Retail</a>
                </li>
            </ul>
        </nav>
        `
    }
}

customElements.define('mrd-header-retail', HeaderRetail);