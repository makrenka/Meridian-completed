import { Component } from "../../../core/Component/Component";
import { initialFieldsState } from "./initialState";

export class SignUp extends Component {
    constructor() {
        super();
        this.state = {
          error: "",
          isLoading: false,
          fields: {
            ...initialFieldsState,
          },
        };
    }

    render() {
        return `
        <mrd-preloader is-loading="${this.state.isLoading}">
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
        </mrd-preloader>
        
        `
    }
}

customElements.define('sign-up-page', SignUp);