import './components';
import { appEvents } from './constants/appEvents';
import { appRoutes } from './constants/appRoutes';
import * as core from "./core";
import { authService } from './services/Auth';

export class App extends core.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            isLogged: false,
            error: "",
        };
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        })
    }

    getUser() {
        this.toggleIsLoading();
        authService.init()
            .then((user) => {
                authService.user = user;
                this.setState((state) => {
                    return {
                        ...state,
                        isLogged: Boolean(user),
                    }
                })
            })
            .catch((error) => {
                this.setState((state) => {
                    return {
                        ...state,
                        error: error.message,
                    }
                })
            })
            .finally(() => {
                this.toggleIsLoading();
            })
    }

    onSignOut = () => {
        this.toggleIsLoading();
        authService.signOut()
            .then(() => {
                this.setState((state) => {
                    return {
                        ...state,
                        isLogged: false,
                    }
                })
            })
            .catch((error) => {
                this.setState((state) => {
                    return {
                        ...state,
                        error: error.message,
                    }
                })
            })
            .finally(() => {
                this.toggleIsLoading();
            })
    }

    setIsLogged = () => {
        this.setState((state) => {
            return {
                ...state,
                isLogged: true,
            }
        })
    }

    componentDidMount() {
        this.getUser();
        this.addEventListener(appEvents.userLoggedOut, this.onSignOut);
        this.addEventListener(appEvents.userAuthorized, this.setIsLogged);
    }

    componentWillUnmount() {
        this.getUser();
        this.removeEventListener(appEvents.userLoggedOut, this.onSignOut);
        this.removeEventListener(appEvents.userAuthorized, this.setIsLogged);
    }

    render() {
        return this.state.isLoading
            ? `<mrd-preloader is-loading="${this.state.isLoading}"></mrd-preloader>`
            : `        
        <mrd-router>
            
                <mrd-header is-logged="${this.state.isLogged}"></mrd-header>

                <mrd-route path="${appRoutes.home}" component="home-page" title="Home page"></mrd-route>
                <mrd-route path="${appRoutes.admin}" component="admin-page" title="Admin page"></mrd-route>
                <mrd-route path="${appRoutes.adminCollections}" component="admin-collections-page" title="Admin collections page"></mrd-route>
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