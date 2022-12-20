import { appEvents } from "../../../constants/appEvents";
import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";

export class Header extends Component {
    constructor() {
        super();
        this.state = {
            activePath: window.location.pathname,
        };
    }

    static get observedAttributes() {
        return ["is-logged"];
    }

    onSignOut(evt) {
        evt.preventDefault();
        if (evt.target.closest(".sign-out-link")) {
            this.dispatch(appEvents.userLoggedOut);
        }
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
        this.dispatch(appEvents.changeRoute, this.onChangeRoute);
        this.addEventListener('click', this.onSignOut);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onSignOut);
    }

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
                        
                        ${JSON.parse(this.props["is-logged"])
                ? ` <li class="header__main-bar-retail-section-list-item">
                        <a href="#" class="header__main-bar-retail-section-list-link sign-out-link">
                            <span class="link">Sign Out</span>
                        </a>
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
                    `
                : "<mrd-header-retail></mrd-header-retail>"
            }
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