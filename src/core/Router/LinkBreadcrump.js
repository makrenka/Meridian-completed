import { Component } from "../Component";

export class LinkBreadcrump extends Component {
    constructor() {
        super();
        this.isShadow = true;
    }

    static get observedAttributes() {
        return ['to']
    }

    onClick = (evt) => {
        evt.preventDefault();
        this.dispatch('change-route', { target: this.props.to });
    }

    componentDidMount() {
        this.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick);
    }

    render() {
        return `
            <a href="${this.props.to}" style="text-decoration: none; color: var(--header-nav-link);">            
                <slot></slot>
            </a>
        `;
    }
} 

customElements.define('mrd-link-breadcrump', LinkBreadcrump);