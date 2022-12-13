import { Component } from "../../../core/Component/Component";

export class SignUp extends Component {
    render() {
        return `
        <h1>SignUp</h1>
        `
    }
}

customElements.define('sign-up-page', SignUp);