import { Component } from "../../../core/Component/Component";

export class SignIn extends Component {
    render() {
        return `
        <h1>Dealer Login</h1>
        `
    }
}

customElements.define('sign-in-page', SignIn);