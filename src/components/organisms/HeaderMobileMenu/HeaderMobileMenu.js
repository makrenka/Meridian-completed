import { Component } from "../../../core";

export class HeaderMobileMenu extends Component {

    render() {
        return `
        
        <div class="header__main-bar-mobile">
            <form class="header__main-bar-mobile-search-form">
                <input type="text" name="header-search" placeholder="Search"
                    class="header__main-bar-mobile-search-input">
                <button type="submit" class="header__main-bar-mobile-search-btn">
                    <img src="./images/icons/search.svg" alt="search-icon">
                </button>
            </form>
            <nav class="header__main-mobile-bar-navigation">
                <ul class="header__main-mobile-bar-navigation-list">
                    <li class="header__main-bar-navigation-list-item">
                        <a href="/" class="header__main-bar-navigation-list-link home-link">Home</a>
                    </li>
                    <li class="header__main-bar-navigation-list-item">
                        <a href="#" class="header__main-bar-navigation-list-link">Products</a>
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
                <ul class="header__main-mobile-bar-retail-section-list">
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
        </div>
        `
    }
}

customElements.define('mrd-header-mobile-menu', HeaderMobileMenu);