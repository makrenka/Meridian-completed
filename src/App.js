import './components';
import { Component } from "./core/Component/Component";

export class App extends Component {
    constructor() {
        super();
    }

    render() {
        return `
        
            <mrd-header></mrd-header>
        `
    }
}

customElements.define('mrd-app', App);