import { appEvents } from "../../../constants/appEvents";
import { appRoutes } from "../../../constants/appRoutes";
import { eventBus } from "../../../core";
import { Component } from "../../../core/Component/Component";
import { FormManager } from "../../../core/FormManager/FormManager";
import { Validator } from "../../../core/FormManager/Validator";
import { authService } from "../../../services/Auth";
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

        this.form = new FormManager();
    }

    toggleisLoading = () => {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        });
    };

    registerUser = (data) => {
        this.toggleisLoading();
        authService
            .signUp(data.email, data.password)
            .then((user) => {
                authService.user = user;
                eventBus.emit(appEvents.changeRoute, { target: appRoutes.home });
                eventBus.emit(appEvents.userAuthorized);
            })
            .catch((error) => {
                this.setState((state) => {
                    return {
                        ...state,
                        error: error.message,
                    };
                });
            })
            .finally(() => {
                this.toggleisLoading();
            });
    };

    validateForm(evt) {
        if (evt.target.closest('mrd-register-input')) {
            this.form.init(this.querySelector('.register-form'), {
                email: [
                    Validator.email('Email is not valid'),
                    Validator.required('The field should not be empty'),
                ],
                password: [Validator.required('The field should not be empty')],
            });
        }
    }

    validate = (evt) => {
        this.setState((state) => {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    ...evt.detail,
                },
            };
        });
    };

    componentDidMount() {
        this.addEventListener('click', this.validateForm);
        eventBus.on(appEvents.validateControls, this.validate);
        this.addEventListener("submit", this.form.handleSubmit(this.registerUser));
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.validateForm);
        eventBus.off(appEvents.validateControls, this.validate);
        this.removeEventListener("submit", this.form.handleSubmit(this.registerUser));
    }

    render() {

        const {
            fields: { email, password },
        } = this.state;


        return `
        <mrd-preloader is-loading="${this.state.isLoading}">
            <form class="register-form">
                <div class="form-container">                    
                    <h1 class="register-heading">Register</h1>
                    <p class="register-text">Please fill in this form to create an account.</p>
                    <hr>

                    <div class="invalid-feedback invalid-feedback--active" style="text-align: center;">
                        ${this.state.error}
                    </div>
                    
                    <mrd-register-input
                        type="email"
                        label="Email"
                        control-name="email"
                        value="${email.value}"
                        is-valid="${email.isValid}"
                        is-touched="${email.isTouched}"
                        error-message="${email.errors?.message}"
                    >
                    </mrd-register-input>
                    <mrd-register-input
                        type="password" 
                        label="Password"
                        control-name="password"
                        class-name="first-pass"
                        value="${password.value}"
                        is-valid="${password.isValid}"
                        is-touched="${password.isTouched}"
                        error-message="${password.errors?.message}"
                    >
                    </mrd-register-input>

                    <button type="submit" class="registerbtn">Register</button>
                </div>
            </form>
        </mrd-preloader>
        
        `
    }
}

customElements.define('sign-up-page', SignUp);