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
        const controlClassName = JSON.parse(this.props['is-valid']) ? 'is-valid' : 'is-invalid';
        const isAddClassName = JSON.parse(this.props['is-touched']) ? controlClassName : '';

        return `
        
        <label for="email" class="register-label-email"><b>${this.props.label}</b></label>
        <input 
            type="${this.props.type}" 
            placeholder="Enter ${this.props.label}" 
            name="${this.props['control-name']}" 
            required 
            class="register-input ${isAddClassName} ${this.props['class-name'] ?? ''}"
            x-moz-errormessage="${this.props['error-message']}">
        `
    }
}

customElements.define('mrd-register-input', RegisterInput);