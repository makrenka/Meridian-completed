import './components';
import { Component } from "./core/Component/Component";

export class App extends Component {
    constructor() {
        super();
    }

    render() {
        return `
        <mrd-hederadbar></mrd-hederadbar>
        <mrd-logo></mrd-logo>
        `
    }
}

customElements.define('mrd-app', App);