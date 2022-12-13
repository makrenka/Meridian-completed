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
                        <span class="header__main-bar-navigation-list-link">Home</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-navigation-list-item">
                    <mrd-link to="${appRoutes.products}">
                        <span class="header__main-bar-navigation-list-link">Products</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-navigation-list-item">
                    <mrd-link to="${appRoutes.showroom}">
                        <span class="header__main-bar-navigation-list-link">Showroom</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-navigation-list-item">
                    <mrd-link to="${appRoutes.aboutUs}">
                        <span class="header__main-bar-navigation-list-link">About Us</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-navigation-list-item">
                    <mrd-link to="${appRoutes.contact}">
                        <span class="header__main-bar-navigation-list-link">Contact</span>
                    </mrd-link>
                </li>
            </ul>
        </nav>
        `
    }
}

customElements.define('mrd-header-nav', HeaderNavigation);