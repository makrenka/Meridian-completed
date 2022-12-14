import { Component } from "../../../core/Component/Component";

export class SignUp extends Component {
    render() {
        return `
        <form class="register-form">
            <div class="form-container">
                <h1 class="register-heading">Register</h1>
                <p class="register-text">Please fill in this form to create an account.</p>
                <hr>

                <mrd-register-input></mrd-register-input>
                <mrd-register-input></mrd-register-input>

                <button type="submit" class="registerbtn">Register</button>
            </div>
        </form>
        `
    }
}

customElements.define('sign-up-page', SignUp);