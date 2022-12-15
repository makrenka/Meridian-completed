import { Component } from "../../../core";

export class HeaderMobileMenu extends Component {

    userClickOutside(evt) {
        const target = evt.target.closest('.header__main-bar-hamburger-menu')
        const mobileMenu = document.querySelector('.header__main-bar-mobile');
        if (!target) {
            mobileMenu.classList.remove('header__main-bar-mobile--active');
        }
    }

    toggleMenu(evt) {
        const target = evt.target.closest('.header__main-bar-hamburger-menu')
        const mobileMenu = document.querySelector('.header__main-bar-mobile');
        if(target) {
            mobileMenu.classList.toggle('header__main-bar-mobile--active');
        }        
    }

    componentDidMount() {
        window.addEventListener('click', this.toggleMenu);
        window.addEventListener('click', this.userClickOutside);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.toggleMenu);
        window.removeEventListener('click', this.userClickOutside);
    }

    render() {
        return `
        
        <div class="header__main-bar-mobile">
            <form class="header__main-bar-mobile-search-form">
                <input type="text" name="header-search" placeholder="Search"
                    class="header__main-bar-mobile-search-input">
                <button type="submit" class="header__main-bar-mobile-search-btn">
                    <img src="../../assets/images/icons/search.svg" alt="search-icon">
                </button>
            </form>
            <nav class="header__main-mobile-bar-navigation">
                <mrd-header-nav class="mrd-header-nav-mobile"></mrd-header-nav>
                <mrd-header-retail class="mrd-header-retail-mobile"></mrd-header-retail>
            </nav>
        </div>
        `
    }
}

customElements.define('mrd-header-mobile-menu', HeaderMobileMenu);