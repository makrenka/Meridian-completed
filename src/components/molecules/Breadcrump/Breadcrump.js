import { Component } from "../../../core/Component/Component";

export class Breadcrump extends Component {

    render() {
        return `
        
        <div class="product-main__breadcrump-wrapper">
            <div class="container">
                <nav class="product-main__breadcrump">
                    <ul class="product-main__breadcrump-list">
                        <li class="product-main__breadcrump-item">
                            <a href="./index.html" class="product-main__breadcrump-link">Home</a>
                            <p class="product-main__breadcrump-text-sep">/</p>
                        </li>
                        <li class="product-main__breadcrump-item">
                            <a href="#" class="product-main__breadcrump-link">SIAM</a>
                            <p class="product-main__breadcrump-text-sep">/</p>
                        </li>
                        <li class="product-main__breadcrump-item">
                            <p class="product-main__breadcrump-text">Siam Set 1 – 6 piece Corner</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-breadcrump', Breadcrump);