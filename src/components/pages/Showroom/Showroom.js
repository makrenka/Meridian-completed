import { Component } from "../../../core/Component/Component";

export class Showroom extends Component {
    render() {
        return `
        <div class="showroom-page__wrapper">
            <div class="container">
                <h1 class="showroom-page__h1">Showroom</h1>
            </div>
        </div>
        `
    }
}

customElements.define('showroom-page', Showroom);