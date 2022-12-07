import { Component } from "../../../core/Component/Component";

export class StockSlider extends Component {
    constructor() {
        super();     
        
        this.state = {
            data: [
                {
                    id: 1,
                    title: 'Alina Velvet Modular Armless',
                    poster: 'alina-armless',
                    price: '£799.00',
                },
                {
                    id: 2,
                    title: 'Alina Velvet Modular Sectional',
                    poster: 'alina-sectional',
                    price: '£799.00',
                },
                {
                    id: 3,
                    title: 'Serpentine Velvet Sofa',
                    poster: 'serpentine-sofa',
                    price: '£795.00',
                },
                {
                    id: 4,
                    title: 'Clarion Dining Chair',
                    poster: 'clarion-chair',
                    price: '£795.00',
                },
            ]
        }
    }

    render() {
        return `
        <section class="homepage-main__in-stock">
            <div class="container">
                <h2 class="homepage-main__in-stock-heading">Ready To Ship</h2>
                <p class="homepage-main__in-stock-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est id
                    pretium pellentesque leo. Lorem.</p>

                    <div class="swiper homepage-main__in-stock-slider">
                    <div class="swiper-wrapper">
                        ${this.state.data.map(({ id, poster, title, price }) => {
                            return `
                                            <div class="swiper-slide homepage-main__in-stock-slide">
                                                <mrd-stock-slide 
                                                    id='${id}'
                                                    poster='${poster}'
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

            <div class="homepage-main__in-stock-slider-adapt-wrapper">
            <div class="swiper homepage-main__in-stock-slider-adapt">
            <div class="swiper-wrapper">
                ${this.state.data.map(({ id, poster, title, price }) => {
                    return `
                                    <div class="swiper-slide homepage-main__in-stock-slide">
                                        <mrd-stock-slide 
                                            id='${id}'
                                            poster='${poster}'
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

        
        `
    }
}

customElements.define('mrd-stock-slider', StockSlider);

