import { Component } from "../../../core";

export class RegisterInput extends Component {

    static get observedAttributes() {
        return [
            "type",
            "label",
            "control-name",
            "class-name",
            "value",
            "is-valid",
            "is-touched",
            "error-message",
        ];
    }

    render() {
        const controlClassNameInput = JSON.parse(this.props['is-valid']) ? 'is-valid' : 'is-invalid';
        const controlClassNameMessage = JSON.parse(this.props['is-valid']) ? 'invalid-feedback' : 'invalid-feedback--active';
        const isAddClassNameInput = JSON.parse(this.props['is-touched']) ? controlClassNameInput : '';
        const isAddClassNameMessage = JSON.parse(this.props['is-touched']) ? controlClassNameMessage : '';

        return `
        <div class="register-input-wrapper">
            <label for="email" class="register-label-email"><b>${this.props.label}</b></label>
            <input 
                type="${this.props.type}" 
                placeholder="Enter ${this.props.label}" 
                name="${this.props['control-name']}" 
                required 
                class="register-input ${isAddClassNameInput} ${this.props['class-name'] ?? ''}" 
                value="${this.props.value}"
            >
        </div>
        
        <div class="invalid-feedback ${isAddClassNameMessage}">${this.props['error-message']}</div>
        </div>
        `
    }
}

customElements.define('mrd-register-input', RegisterInput);