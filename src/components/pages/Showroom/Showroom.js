import { Component } from "../../../core/Component/Component";

export class Showroom extends Component {
    render() {
        return `
        <h1>Showroom</h1>
        `
    }
}

customElements.define('showroom-page', Showroom);