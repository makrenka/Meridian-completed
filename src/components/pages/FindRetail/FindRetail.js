import { Component } from "../../../core/Component/Component";

export class FindRetail extends Component {
    render() {
        return `
        <h1>FindRetail</h1>
        `
    }
}

customElements.define('find-retail-page', FindRetail);