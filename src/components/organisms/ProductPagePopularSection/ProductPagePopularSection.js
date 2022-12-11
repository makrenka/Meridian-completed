import { Component } from "../../../core/Component/Component";

export class ProductPagePopularSection extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    image: 'Alma Velvet Armless.jpg',
                    title: 'Alma Velvet Armless',
                    price: '£3,400.00',
                },
                {
                    image: 'Alma Velvet Armless Set.jpg',
                    title: 'Alma Velvet Armless Set',
                    price: '£3,600.00',
                },
                {
                    image: 'Alina Velvet Set.jpg',
                    title: 'Alina Velvet Set',
                    price: '£3,700.00',
                },
                {
                    image: 'Serpentine Velvet Sofa.jpg',
                    title: 'Serpentine Velvet Sofa',
                    price: '£4,600.00',
                },
            ]
        }
    }

    render() {
        return `
        
        <section class="product-main__popular">
            <div class="container">
                <h2 class="product-main__popular-heading">Shop Our Other Popular Sets</h2>
                <div class="product-main__popular-sets">
                    ${this.state.data.map(({ image, title, price }) => 
                        `
                        <div class="product-main__popular-set">
                            <img src="../../assets/images/product-popular-sets/${image}" alt="popular-sets-image"
                                class="product-main__popular-set-img">
                            <h6 class="product-main__popular-set-heading">${title}</h6>
                            <p class="product-main__popular-set-text">${price}</p>
                            <form action="./product.html" class="product-main__popular-set-form">
                                <button class="product-main__popular-set-form-btn">View Set</button>
                            </form>
                        </div>
                        `
                    ).join(' ')}                                       
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('mrd-pp-popular-section', ProductPagePopularSection);