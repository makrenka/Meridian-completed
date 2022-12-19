import { Component } from "../../../core/Component/Component";

export class FindRetail extends Component {
    render() {
        return `
        <div class="find-retail-page__wrapper">
            <div class="container">
                <h1 class="find-retail-page__h1">Find A Retail</h1>
            </div>
        </div>
        `
    }
}

customElements.define('find-retail-page', FindRetail);