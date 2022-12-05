import { Component } from "../../../core/Component/Component";

export class HeaderNavigation extends Component {

    render() {
        return `
        
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
        `
    }
}

customElements.define('mrd-header-nav', HeaderNavigation);