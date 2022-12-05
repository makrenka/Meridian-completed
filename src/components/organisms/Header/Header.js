import { Component } from "../../../core/Component/Component";

export class Header extends Component {
    render() {
        return `
        <mrd-hederadbar></mrd-hederadbar>
        <div class="container">
            <div class="header__main-bar">
                <mrd-header-nav></mrd-header-nav>

                <!-- Hamburger logo for adaptive -->
                <img src="./images/icons/hamburger-menu.svg" alt="hamburger-menu" class="header__main-bar-hamburger-menu">

                <mrd-logo></mrd-logo>

                <div class="header__main-bar-retail-section-wrapper">
                    <mrd-header-retail></mrd-header-retail>
                    <div class="header__main-bar-icons">
                        <mrd-cart></mrd-cart>
                        <img src="../../assets/images/icons/search.svg" alt="search-icon" class="header__main-bar-icons-search">
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-header', Header);