import './components';
import * as core from "./core";

export class App extends core.Component {
    constructor() {
        super();
    }

    render() {
        return `
        <mrd-router>
            <mrd-header></mrd-header>
            <main id="main">
                <mrd-route path="/" component="home-page" title="Home page"></mrd-route>
                <mrd-route path="/admin" component="admin-page" title="Admin page"></mrd-route>
                <mrd-route path="/admin" component="admin-page" title="Admin page"></mrd-route>
                <mrd-route path="/sign-in" component="sign-in-page" title="Dealer Login"></mrd-route>
                <mrd-route path="/sign-up" component="sign-up-page" title="Become A Dealer"></mrd-route>
                <mrd-route path="/product" component="product-page" title="Product page"></mrd-route>
                <mrd-route path="*" component="error-page" title="Not Found page"></mrd-route>
                <mrd-outlet></mrd-outlet>
            </main>
            <mrd-footer></mrd-footer>
        </mrd-router>
        `
    }
}

customElements.define('mrd-app', App);