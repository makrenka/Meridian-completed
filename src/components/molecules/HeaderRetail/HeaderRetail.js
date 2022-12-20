import { appEvents } from "../../../constants/appEvents";
import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";

export class HeaderRetail extends Component {
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
        this.dispatch(appEvents.changeRoute, this.onChangeRoute);
    }

    render() {
        return `               
            <ul class="header__main-bar-retail-section-list">
                <li class="header__main-bar-retail-section-list-item">
                    <mrd-link to="${appRoutes.signIn}">
                        <span class="header__main-bar-retail-section-list-link ${this.isActiveLink(appRoutes.signIn)}">Dealer Login</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-retail-section-list-item">
                    <mrd-link to="${appRoutes.signUp}">
                        <span class="header__main-bar-retail-section-list-link ${this.isActiveLink(appRoutes.signUp)}">Become A Dealer</span>
                    </mrd-link>
                </li>
                <li class="header__main-bar-retail-section-list-item">
                    <mrd-link to="${appRoutes.findRetail}">
                        <span class="header__main-bar-retail-section-list-link ${this.isActiveLink.findRetail}">Find A Retail</span>
                    </mrd-link>
                </li>
            
                
            </ul>
        
        `
    }
}

customElements.define('mrd-header-retail', HeaderRetail);