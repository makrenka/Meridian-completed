import { Component } from "../../../core/Component/Component";

export class Header extends Component {
    render() {
        return `
        <mrd-hederadbar></mrd-hederadbar>
        <div class="container">
            <div class="header__main-bar">
                <nav class="header__main-bar-navigation">
                    <ul class="header__main-bar-navigation-list">
                        <li class="header__main-bar-navigation-list-item">
                            <a href="/" class="header__main-bar-navigation-list-link home-link">Home</a>
                        </li>
                        <li class="header__main-bar-navigation-list-item">
                            <a href="./product.html" class="header__main-bar-navigation-list-link">Products</a>
                        </li>
                        <li class="header__main-bar-navigation-list-item">
                            <a href="#" class="header__main-bar-navigation-list-link">Showroom</a>
                        </li>
                        <li class="header__main-bar-navigation-list-item">
                            <a href="#" class="header__main-bar-navigation-list-link">About Us</a>
                        </li>
                        <li class="header__main-bar-navigation-list-item">
                            <a href="#" class="header__main-bar-navigation-list-link">Contact</a>
                        </li>
                    </ul>
                </nav>

                <!-- Hamburger logo for adaptive -->
                <img src="./images/icons/hamburger-menu.svg" alt="hamburger-menu" class="header__main-bar-hamburger-menu">

                <mrd-logo></mrd-logo>

                <div class="header__main-bar-retail-section-wrapper">
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