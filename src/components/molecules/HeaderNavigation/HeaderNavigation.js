import { appEvents } from "../../../constants/appEvents";
import { appRoutes } from "../../../constants/appRoutes";
import { eventBus } from "../../../core";
import { Component } from "../../../core/Component/Component";
import './HeaderNavigation.scss';

export class HeaderNavigation extends Component {
    constructor() {
        super();
        this.state = {
            activePath: window.location.pathname,
        };
    }

    onChangeRoute = (evt) => {
        this.setState((state) => {
            return {
                ...state,
                activePath: evt.detail.target,
            };
        });
    };

    isActiveLink(path) {
        return this.state.activePath === path ? "active-link" : "";
    }

    componentDidMount() {
        eventBus.on(appEvents.changeRoute, this.onChangeRoute);
    }

    render() {
        return `
        
        
            <ul class="header__main-bar-navigation-list">
                <li class="header__main-bar-navigation-list-item">
                    <mrd-link to="${appRoutes.home}">
                        <span class="header__main-bar-navigation-list-link ${this.isActiveLink(appRoutes.home)}">Home</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-navigation-list-item">
                    <mrd-link to="${appRoutes.products}">
                        <span class="header__main-bar-navigation-list-link ${this.isActiveLink(appRoutes.products)}">Products</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-navigation-list-item">
                    <mrd-link to="${appRoutes.showroom}">
                        <span class="header__main-bar-navigation-list-link ${this.isActiveLink(appRoutes.showroom)}">Showroom</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-navigation-list-item">
                    <mrd-link to="${appRoutes.aboutUs}">
                        <span class="header__main-bar-navigation-list-link ${this.isActiveLink(appRoutes.aboutUs)}">About Us</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-navigation-list-item">
                    <mrd-link to="${appRoutes.contact}">
                        <span class="header__main-bar-navigation-list-link ${this.isActiveLink(appRoutes.contact)}">Contact</span>
                    </mrd-link>
                </li>
            </ul>
        
        `
    }
}

customElements.define('mrd-header-nav', HeaderNavigation);