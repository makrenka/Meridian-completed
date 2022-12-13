import './components';
import { appRoutes } from './constants/appRoutes';
import * as core from "./core";

export class App extends core.Component {
    constructor() {
        super();
    }

    render() {
        return `
        
        <mrd-router>
            <mrd-header></mrd-header>

            <mrd-route path="${appRoutes.home}" component="home-page" title="Home page"></mrd-route>
            <mrd-route path="${appRoutes.admin}" component="admin-page" title="Admin page"></mrd-route>
            <mrd-route path="${appRoutes.signIn}" component="sign-in-page" title="Dealer Login"></mrd-route>
            <mrd-route path="${appRoutes.signUp}" component="sign-up-page" title="Become A Dealer"></mrd-route>
            <mrd-route path="${appRoutes.products}" component="products-page" title="Products"></mrd-route>
            <mrd-route path="${appRoutes.showroom}" component="showroom-page" title="Showroom"></mrd-route>
            <mrd-route path="${appRoutes.contact}" component="contact-page" title="Contact"></mrd-route>
            <mrd-route path="${appRoutes.aboutUs}" component="about-us-page" title="AboutUs"></mrd-route>
            <mrd-route path="${appRoutes.findRetail}" component="find-retail-page" title="Find A Retail"></mrd-route>
            <mrd-route path="${appRoutes.productDetails}" component="product-page" title="Product page"></mrd-route>
            <mrd-route path="${appRoutes.cart}" component="cart-page" title="Cart"></mrd-route>
            <mrd-route path="${appRoutes.errorPage}" component="error-page" title="Not Found page"></mrd-route>
            <mrd-outlet></mrd-outlet>

            <mrd-footer></mrd-footer>            
        </mrd-router>
        `
    }
}

customElements.define('mrd-app', App);