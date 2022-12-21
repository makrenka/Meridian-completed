import { Component } from "../../../core/Component/Component";

export class Overlay extends Component {

    render() {
        return `
        <div class="overlay"></div>
        `
    }
}

customElements.define('mrd-overlay', Overlay);