import { Component } from "../../../core/Component/Component";
import Swiper, { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { databaseService } from "../../../services/Database";

export class StockSlider extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            products: [],
        }
    }

    initSwiper() {
        let swiper = new Swiper('.homepage-main__in-stock-slider', {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,

            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10
                },
                300: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    modules: [Scrollbar],
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        draggable: true,
                        dragSize: 250,
                    },
                },
            },

            modules: [Navigation, Pagination, Scrollbar],

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        return swiper;
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        })
    }

    getProducts() {
        this.toggleIsLoading();
        databaseService.read("products")
            .then((data) => {
                this.setState((state) => {
                    return {
                        ...state,
                        products: data,
                    }
                });

            })
            .finally(() => {
                this.toggleIsLoading();
                this.initSwiper();
            })
    }

    componentDidMount() {
        this.getProducts();
    }

    componentWillUnmount() {
        this.getProducts();
    }

    render() {
        return `
        <mrd-preloader is-loading="${this.state.isLoading}">
            <section class="homepage-main__in-stock">
                <div class="container">
                    <h2 class="homepage-main__in-stock-heading">Ready To Ship</h2>
                    <p class="homepage-main__in-stock-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est id
                        pretium pellentesque leo. Lorem.</p>

                        <div class="swiper homepage-main__in-stock-slider">
                        <div class="swiper-wrapper">
                            
                            ${this.state.products.map(({ id, image, title, price }) => {
            return `
                            <div class="swiper-slide homepage-main__in-stock-slide">               
                                <mrd-stock-slide 
                                    id='${id}'
                                    image='${image}'
                                    title='${title}'
                                    price='${price}'>
                                </mrd-stock-slide>
                            </div>
                        `
        }).join(' ')}                       
                        </div>
                        <div class="swiper-button-prev in-stock-button-prev"></div>
                        <div class="swiper-button-next in-stock-button-next"></div>
                        <div class="swiper-scrollbar in-stock-scrollbar"></div>
                    </div>
                </div>

                
            </section>
        </mrd-preloader>
        
        `
    }
}

customElements.define('mrd-stock-slider', StockSlider);

