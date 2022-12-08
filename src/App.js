import './components';
import { Component } from "./core/Component/Component";

export class App extends Component {
    constructor() {
        super();
    }

    render() {
        return `
        
            <mrd-product-page></mrd-product-page>
        `
    }
}

customElements.define('mrd-app', App);