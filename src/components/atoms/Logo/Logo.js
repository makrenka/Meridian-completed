import { Component } from "../../../core/Component/Component";

export class Logo extends Component {


    render() {
        return `
        
        <div class="header__main-bar-logo">
            <a href="/">
                <img src="../../assets/images/logo.svg" alt="logo" class="header__main-bar-logo">
            </a>
        </div>
        `
    }
}

customElements.define('mrd-logo', Logo);