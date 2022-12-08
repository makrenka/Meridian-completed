import './components';
import { Component } from "./core/Component/Component";

export class App extends Component {
    constructor() {
        super();
    }

    render() {
        return `
        
            <mrd-header></mrd-header>
            <mrd-home-main></mrd-home-main>
            <mrd-footer></mrd-footer>
        `
    }
}

customElements.define('mrd-app', App);