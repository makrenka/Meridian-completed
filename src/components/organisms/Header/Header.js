import { Component } from "../../../core/Component/Component";

export class Header extends Component {
    render() {
        return `
        <mrd-hederadbar></mrd-hederadbar>
        <div class="container">
            <div class="header__main-bar">
                <!-- Hamburger logo for adaptive -->
                <img src="../../assets/images/icons/hamburger-menu.svg" alt="hamburger-menu" class="header__main-bar-hamburger-menu">
                <nav class="header__main-bar-navigation">
                    <mrd-header-nav></mrd-header-nav>
                </nav>
                <mrd-logo></mrd-logo>
                <div class="header__main-bar-retail-section-wrapper">
                    <nav class="header__main-bar-retail-section">
                        <mrd-header-retail></mrd-header-retail>
                    </nav>
                    <div class="header__main-bar-icons">
                        <mrd-cart-icon></mrd-cart-icon>
                        <img src="../../assets/images/icons/search.svg" alt="search-icon" class="header__main-bar-icons-search">
                    </div>
                </div>
            </div>
        </div>

        <mrd-header-mobile-menu></mrd-header-mobile-menu>
        `
    }
}

customElements.define('mrd-header', Header);