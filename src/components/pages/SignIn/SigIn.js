import { Component } from "../../../core/Component/Component";

export class SignIn extends Component {
    render() {
        return `
        <h1>SignIn</h1>
        `
    }
}

customElements.define('sign-in-page', SignIn);