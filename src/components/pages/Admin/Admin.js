import { Component } from "../../../core/Component/Component";

export class Admin extends Component {
    render() {
        return `
        <h1>Admin</h1>
        `
    }
}

customElements.define('admin-page', Admin);