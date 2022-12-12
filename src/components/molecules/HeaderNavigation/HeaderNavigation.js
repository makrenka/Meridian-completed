import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";
import './HeaderNavigation.scss';

export class HeaderNavigation extends Component {

    render() {
        return `
        
        <nav class="header__main-bar-navigation">
            <ul class="header__main-bar-navigation-list">
                <li class="header__main-bar-navigation-list-item">
                    <mrd-link to="${appRoutes.home}">
                        <span class="header__main-bar-navigation-list-link home-link">Home</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-navigation-list-item">
                    <mrd-link to="${appRoutes.products}">
                        <span class="header__main-bar-navigation-list-link">Products</span>
                    </mrd-link>
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